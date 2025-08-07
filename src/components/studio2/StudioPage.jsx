import React, { useEffect, useRef, useState } from "react";
import "./StudioPage.scss";
import checker from "../../../public/images/checker.png"
import { StepProgress } from "./StepProgress";
import VideoUploadStep1 from "./VideoUploadStep1";
import VideoUploadStep2 from "./VideoUploadStep2";
import Beneficiary_modal from "../modal/Beneficiary_modal";
import Auth_modal from "../modal/Auth_modal";
import Communitie_modal from "../modal/Communitie_modal";
import axios from "axios";
import DOMPurify from 'dompurify';
import { useAppStore } from "../../lib/store";
import { has3SpeakPostAuth } from "../../utils/hiveUtils";
import { useNavigate } from "react-router-dom";
import TextEditor from "../studio/TextEditor";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import { MdPeopleAlt } from "react-icons/md";
import VideoPreview from "../studio/VideoPreview";
import Preview from "./Preview";
import {  toast } from 'sonner'
import { LineSpinner } from 'ldrs/react'
import 'ldrs/react/LineSpinner.css'




function StudioPage() {

    const {updateProcessing, user, authenticated} = useAppStore()
     const studioEndPoint = "https://studio.3speak.tv";
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [tagsInputValue, setTagsInputValue] = useState("");
    const [tagsPreview, setTagsPreview] = useState([]);
    const [community, setCommunity] = useState("hive-181335");
    const [beneficiaries, setBeneficiaries] = useState('[]');
    const [declineRewards, SetDeclineRewards] = useState(false)
    const [rewardPowerup, setRewardPowerup] = useState(false)
    const [communitiesData, setCommunitiesData] = useState([]);
    const [prevVideoUrl, setPrevVideoUrl] = useState(null);
    const [prevVideoFile, setPrevVideoFile] = useState(null);
    const [uploadURL, setUploadURL] = useState("");
    const [videoId, setVideoId] = useState("");
    const [videoFile, setVideoFile] = useState(null);
    const [videoDuration, setVideoDuration] = useState(0);
    const username = localStorage.getItem("user_id");
    const accessToken = localStorage.getItem("access_token");
    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [generatedThumbnail, setGeneratedThumbnail] = useState([]);
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const [BeneficiaryList, setBeneficiaryList] = useState(2)
    const [list, setList] = useState([]);
    const [remaingPercent, setRemaingPercent] = useState(89)
    const [step, setStep] = useState(1)
    const [isOpenAuth, setIsOpenAuth] = useState(false)
    const [isOpen, setIsOpen] = useState(false)
    const [benficaryOpen, setBeneficiaryOpen] = useState(false)
    const [uploadVideoProgress, setUploadVideoProgress] = useState(0);
     const [uploadThumbnailProgress, setUploadThumbnailProgress] = useState(0);
     const [uploadStatus, setUploadStatus] = useState(false)
     const [error, setError] = useState("")
     const uploadURLRef = useRef('');


    useEffect(() => {
    const fetchCommunities = async () => {
      try {
        const response = await axios.post("https://api.hive.blog", {
          jsonrpc: "2.0",
          method: "bridge.list_communities",
          params: { last: "", limit: 100 },
          id: 1,
        });
        setCommunitiesData(response.data.result || []);
      } catch (error) {
        console.error("Error fetching communities:", error);
      }
    };

    fetchCommunities();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      console.log("Checking for uploadURL...");
  
      if (uploadURL && thumbnailFile) {
        console.log("uploadURL is available:", uploadURL);
        updateVideoInfo(thumbnailFile);
        clearInterval(interval); // Stop checking
      }
    }, 5000);
  
    // Clean up interval on unmount
    return () => clearInterval(interval);
  }, [uploadURL, thumbnailFile]); // Empty dependency to only run once on mount
  

    const openCommunityModal = () => {
    setIsOpen(true);
  };

  const closeCommunityModal = () => {
    setIsOpen(false);
  };

  const toggleUploadModal = ()=>{
    setUploadModalOpen( (prev)=> !prev)
  }

  const toggleBeneficiaryModal = ()=>{
    setBeneficiaryOpen( (prev)=> !prev)
  }
  const toggleUploadModalAuth = ()=>{
    setIsOpenAuth( (prev)=> !prev)
  }

  useEffect(()=>{
    checkPostAuth(user);
  },[])

    const  checkPostAuth= async(username)=>{
        if(!authenticated){
          return
        }
        const hasAuth = await has3SpeakPostAuth(username);
        if (!hasAuth) {
          setIsOpenAuth(true);
        }
      }

    const handleSelect = (e)=>{
    const value = e.target.value;
    if(value === "powerup"){
      setRewardPowerup(true)
      SetDeclineRewards(false)
    }else if(value === "decline"){
      SetDeclineRewards(true)
      setRewardPowerup(false)
    }else {
      SetDeclineRewards(false)
      setRewardPowerup(false)
    }
  }

  const process = ()=>{
    if(!title || !description || !tagsInputValue || !community || !thumbnailFile){
        toast.error("Please fill in all fields, upload a thumbnail, and upload a video!");
              return;
    }
    setStep(4)

  }

  const sanitizedDescription = DOMPurify.sanitize(description);



      const updateVideoInfo = async (thumbnailFile) => {
          console.log("Upload URL:", uploadURL);
          console.log("Video File:", videoFile);
          console.log("Thumbnail File:", thumbnailFile);
          if (!uploadURL || !videoFile || !thumbnailFile) {
              console.error("Missing video and thumbnail data.");
              setError("Video and thumbnail is require.")
              return;
          }
          setError("")
          const oFilename = videoFile.name;
          const fileSize = videoFile.size;
          const thumbnailIdentifier = thumbnailFile.replace("https://uploads.3speak.tv/files/", "");
          console.log(thumbnailIdentifier)
  
          try {
              setLoading(true)
              const { data } = await axios.post(
                  `${studioEndPoint}/mobile/api/upload_info`,
                  {
                      filename: uploadURL,
                      oFilename,
                      size: fileSize,
                      duration: Math.round(videoDuration),
                      thumbnail: thumbnailIdentifier,
                      owner: username,
                      isReel: false,
                  },
                  {
                      withCredentials: false,
                      headers: {
                          "Content-Type": "application/json",
                          Authorization: `Bearer ${accessToken}`,
                      },
                  }
              );
  
              if(data){
                  console.log("Video info updated successfully:", data);
                  setVideoId(data._id);
                  setUploadStatus(true)
                  // setStep(3); // Proceed to next step
                  // close()
              }
  
              
  
              
              return data;
          } catch (e) {
              console.error("Error updating video info:", e);
              // Extract a meaningful error message
              const errorMessage =
                  e.response?.data?.message || "Failed to update video info. Please try again.";
              setError(errorMessage);
              setLoading(false)
          }
      };

  return (
    <>
    <div className="studio-main-container">
      <div className="studio-page-header">
        <h1>Upload Video</h1>
        <p>Follow the steps below to upload and publish your video</p>
      </div>
      <StepProgress step={step} />
      <div className="studio-page-content">
      {step === 1 && <VideoUploadStep1
       setPrevVideoUrl={setPrevVideoUrl}
       setPrevVideoFile={setPrevVideoFile}
       setVideoId={setVideoId}
       videoFile={videoFile}
       setVideoFile={setVideoFile}
       setVideoDuration={setVideoDuration}
       setUploadURL={setUploadURL}
       username={username}
       accessToken={accessToken}
       thumbnailFile={thumbnailFile}
       setThumbnailFile={setThumbnailFile}
       setGeneratedThumbnail={setGeneratedThumbnail}
       setStep={setStep}
       setUploadVideoProgress={setUploadVideoProgress}
       uploadVideoProgress={uploadVideoProgress}
       uploadURLRef={uploadURLRef}
       />}
      {step === 2 && <VideoUploadStep2 
      videoFile={videoFile}
      videoDuration={videoDuration}
       generatedThumbnail={generatedThumbnail}
       thumbnailFile={thumbnailFile}
       setThumbnailFile={setThumbnailFile}
       uploadURL={uploadURL}
       username={username}
       accessToken={accessToken}
       videoId={videoId}
       setStep={setStep}
       setVideoId={setVideoId}
       setUploadThumbnailProgress={setUploadThumbnailProgress}
       uploadThumbnailProgress={uploadThumbnailProgress}
       setUploadStatus={setUploadStatus}
       uploadVideoProgress={uploadVideoProgress}
       uploadURLRef={uploadURLRef}
       />}

       {step === 3 &&<div className="progressbar-container">
        <div className="content-wrap">
          <div className="wrap">
            <div className="wrap-top"><h3>Video encoding</h3> <div>{uploadVideoProgress}%</div></div>
            { uploadVideoProgress > 0 &&<div className="progress-bars">
            <div className="progress-bar-fill" style={{ width: `${uploadVideoProgress}%` }}>
              {/* {uploadVideoProgress > 0 && <span className="progress-bar-text">{uploadVideoProgress}%</span>} */}
            </div>
          </div>}
          </div>
          <div className="wrap">
            <div className="wrap-top"><h3>Fetching Thumbnail</h3> <div>{uploadThumbnailProgress}%</div></div>
            {uploadThumbnailProgress > 0 &&<div className="progress-bars">
            <div className="progress-bar-fill" style={{ width: `${uploadThumbnailProgress}%` }}>
              {/* {uploadThumbnailProgress > 0 && <span className="progress-bar-text">{uploadThumbnailProgress}%</span>} */}
            </div>
          </div>}
          </div>
          <div className="wrap">
            <div className="wrap-upload"><h3>{!uploadStatus ? "Uploading video" :'Video uploaded'} </h3> <div>{!uploadStatus ? <LineSpinner size="20" stroke="3" speed="1" color="black" /> : <img src={checker} alt="" />}</div></div>
          </div>

          
        </div>
        

       </div>}

       {step === 3 && <div className="video-detail-wrap">
        <div className="video-items">
        <div className="input-group">
          <label htmlFor="">Title</label>
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="">Description</label>
          <div className="wrap-dec">
          {/* <ReactQuill theme="snow" value={description} onChange={setDescription}  style={{ height: "90%", }} /> */}
          <TextEditor description={description} setDescription={setDescription} style={{ height: "80%", }} />
          </div>
        </div>

        <div className="input-group">
          <label htmlFor="">Tag</label>
          <input type="text" value={tagsInputValue} onChange={(e) => {setTagsInputValue(e.target.value.toLowerCase()); setTagsPreview(e.target.value.toLowerCase().trim().split(/\s+/));}}  />
          
          <div className="wrap">
          <span>Separate multiple tags with </span> <span>Space</span>
          </div>
          {/* Show the tags */}
        <div className="preview-tags">
        {tagsPreview &&<span> {tagsPreview.map((item, index) => (
      <span className="item" key={index} style={{ marginRight: '8px' }}>
        {item}
      </span>
    ))}</span>}
        </div>
        </div>

        <div className="community-wrap" onClick={openCommunityModal}>
            {community ? <span>{community === "hive-181335" ? "Select Community" : <div className="wrap"><img src={`https://images.hive.blog/u/${community.name}/avatar`} alt="" /><span></span>{community.title}</div> }</span> : <span> Select Community </span> }
            <IoIosArrowDropdownCircle size={16} />
          </div> 

        <div className="advance-option">
          <div className="beneficiary-wrap mb">
           <div className="wrap">
           <span>Rewards Distribution</span>
           <span>Optional "Hive Reward Pool" distribution method.</span>
           </div>
           <div className="select-wrap">
            <select name="" id="" onChange={handleSelect}>
              <option value="default"> Default 50% 50% </option>
              <option value="powerup">Power up 100%</option>
              <option value="decline">Decline Payout</option>
            </select>
           </div>
          </div>
          <div className="beneficiary-wrap">
           <div className="wrap">
           <span>Beneficiaries</span>
           <span>Other accounts that should get a % of the post rewards.</span>
           </div>
           <div className="bene-btn-wrap" onClick={toggleBeneficiaryModal}>
            {list.length > 0 && <spa>{list.length}</spa>}
            <span> BENEFICIARIES</span>
            <MdPeopleAlt />
           </div>
          </div>
        </div>

        <div className="submit-btn-wrap">
        <button onClick={()=>{console.log("description===>", description); process() }}>Processed</button>
        </div>

        </div>
        <div className="Preview">
        <h3>Preview</h3>

        {/* Show the title */}
        <div className="preview-title">
           {title && <span> {title}</span>}
        </div>

        {/* Show the description */}
        <div className="preview-description">
          {sanitizedDescription &&  <span dangerouslySetInnerHTML={{ __html: sanitizedDescription }}></span>}
        </div>

        {/* Show the tags */}
        <div className="preview-tags">
        {tagsPreview &&<span> Tags: {tagsPreview.map((item, index) => (
      <span className="item" key={index} style={{ marginRight: '8px' }}>
        {item}
      </span>
    ))}</span>}
        </div>

        

        {/* Show the video preview */}
        {videoId && (
              <div className="preview-video">
                {/* <video
                  src={URL.createObjectURL(prevVideoFile)}
                  controls
                  width="100%"
                  style={{ marginTop: "1rem", borderRadius: "10px" }}
                /> */}
                <VideoPreview file={prevVideoFile} />
                </div>)}

        {/* Show the thumbnail image */}
        {videoId && (
          <div className="preview-thumbnail">
            <img
              src={thumbnailFile}
              alt="Thumbnail"
              style={{ width: "250px", height: "auto", borderRadius: "8px",marginTop: "10px", }}
            />
          </div>
        )}
        

        </div>
      </div> }

      {step === 4 && <Preview 
      title={title}
        description={sanitizedDescription}  
        tagsPreview={tagsPreview}
        videoId={videoId}   
        prevVideoFile={prevVideoFile}
        thumbnailFile={thumbnailFile}
        sanitizedDescription={sanitizedDescription}
        setStep={setStep}
        setVideoId={setVideoId}
        setPrevVideoUrl={setPrevVideoUrl}
        tagsInputValue={tagsInputValue}
        community={community}
        beneficiaries={beneficiaries}
        declineRewards={declineRewards}
        rewardPowerup={rewardPowerup}



      />}
        </div>
    </div>
          {isOpen && <Communitie_modal isOpen={isOpen} data={communitiesData} close={closeCommunityModal} setCommunity={setCommunity} />}
          {benficaryOpen && <Beneficiary_modal
              close={toggleBeneficiaryModal}
              isOpen={benficaryOpen}
              setBeneficiaries={setBeneficiaries}
              setBeneficiaryList={setBeneficiaryList}
              setList={setList}
              list={list}
              setRemaingPercent={setRemaingPercent}
              remaingPercent={remaingPercent}
          />}
          {isOpenAuth && <Auth_modal isOpenAuth={isOpenAuth} closeAuth={toggleUploadModalAuth} />}

      </>
  );
}

export default StudioPage;
