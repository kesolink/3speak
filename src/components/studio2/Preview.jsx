import React, { useState } from 'react'
import "./Preview.scss"
import axios from 'axios';
import {  toast } from 'sonner'
import { useNavigate } from 'react-router-dom';
import { useAppStore } from '../../lib/store';
import { TailChase } from 'ldrs/react'
import 'ldrs/react/TailChase.css'
import VideoPreview from '../studio/VideoPreview';
function Preview({ title, description, tagsPreview, videoId, prevVideoFile, community,declineRewards, rewardPowerup, beneficiaries, tagsInputValue, thumbnailFile, sanitizedDescription }) {
  const studioEndPoint = "https://studio.3speak.tv";
  const {updateProcessing, } = useAppStore()
  const [loading, setLoading] = useState(false)
  const username = localStorage.getItem("user_id");
  const accessToken = localStorage.getItem("access_token");
    const navigate = useNavigate();
  const client = axios.create({});
  

  const handleSubmitDetails = async () => {
    console.log(beneficiaries)
    console.log(title)
    console.log(tagsInputValue)
    console.log(community)
    console.log(thumbnailFile)

    if (!title || !description || !tagsInputValue || !community || !thumbnailFile ) {
      toast.error("Please fill in all fields, upload a thumbnail, and upload a video!");
      return;
    }

    const formattedTags = tagsInputValue.trim().split(/\s+/).join(",");

    const thumbnailIdentifier = thumbnailFile.replace("https://uploads.3speak.tv/files/", "");
    try {
      setLoading(true)
      const response = await client.post(`${studioEndPoint}/mobile/api/update_info`,
        {
          beneficiaries: beneficiaries,
          description: `${description}<br/><sub>Uploaded using 3Speak Mobile App</sub>`,
          videoId: videoId, // Using uploaded video URL as videoId
          title,
          isNsfwContent: false,
          tags:formattedTags,
          thumbnail: thumbnailIdentifier,
          communityID: community.name,
          declineRewards,
          rewardPowerup
        }, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${accessToken}`,
        },
      });

      console.log("Details submitted successfully:", response.data);
      updateProcessing(response.data.permlink, response.data.title, username)
      toast.success("Video uploaded & Processing");
      navigate("/profile")
    } catch (error) {
      console.error("Failed to submit details:", error);
      toast.error("Failed uploading video details.")
      setLoading(false)
    }
  };
    return (
        <div className="preview-container">
  <div className="preview">
    <h3>Preview</h3>

    {title && (
      <div className="preview-section">
        <label className="preview-label">Title</label>
        <div className="preview-title">{title}</div>
      </div>
    )}

    {sanitizedDescription && (
      <div className="preview-section">
        <label className="preview-label">Description</label>
        <div
          className="preview-description"
          dangerouslySetInnerHTML={{ __html: sanitizedDescription }}
        />
      </div>
    )}

    {videoId && (
      <div className="preview-section">
        <label className="preview-label">Video Preview</label>
        <div className="preview-video">
          <VideoPreview file={prevVideoFile} />
        </div>
      </div>
    )}

    {videoId && (
      <div className="preview-section">
        <label className="preview-label">Thumbnail</label>
        <img
          className="preview-thumbnail"
          src={thumbnailFile}
          alt="Thumbnail"
        />
      </div>
    )}

    {tagsPreview && (
      <div className="preview-section">
        <label className="preview-label">Tags</label>
        <div className="preview-tags">
          {tagsPreview.map((tag, index) => (
            <span className="tag-item" key={index}>
              {tag}
            </span>
          ))}
        </div>
      </div>
    )}
  </div>

  <div className="submit-btn-wrap">
    <button onClick={() => {
      console.log("description ===>", description);
      handleSubmitDetails();
    }}>
      {loading ? (
        <span className="wrap-loader">
          Processing <TailChase size="15" speed="1.75" color="white" />
        </span>
      ) : "Post Video"}
    </button>
  </div>
</div>

  )
}

export default Preview