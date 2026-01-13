import { useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { useQuery as useApolloQuery } from "@apollo/client";
import axios from "axios";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./HomeGrouped.scss";
import { NEW_CONTENT } from "../graphql/queries";
import CardSkeleton from "../components/Cards/CardSkeleton";
import Card3 from "../components/Cards/Card3";

// Fetch functions for each feed
const fetchHome = async () => {
  const res = await axios.get(`https://3speak.tv/apiv2/feeds/home?page=0`);
  return res.data.trends || res.data;
};

const fetchFirstUploads = async () => {
  const res = await axios.get(`https://3speak.tv/apiv2/feeds/firstUploads?page=1`);
  return res.data;
};

const fetchTrending = async () => {
  const res = await axios.get(`https://3speak.tv/apiv2/feeds/trending?limit=50`);
  return res.data;
};

// Horizontal scrollable video row component
const VideoRow = ({ title, videos, linkTo, isLoading }) => {
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 600;
      scrollContainerRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="video-row">
      <div className="row-header">
        <h2>{title}</h2>
        {linkTo && (
          <Link to={linkTo} className="view-all">
            View All
          </Link>
        )}
      </div>

      <div className="scroll-wrapper">
        <button className="scroll-btn left" onClick={() => scroll("left")}>
          <FaChevronLeft />
        </button>

        <div className="video-scroll-container-horizontal" ref={scrollContainerRef}>
          {isLoading || videos.length === 0 ? (
            // Show skeleton placeholders while loading
            <div className="skeleton-horizontal-container">
              {Array.from({ length: 8 }).map((_, index) => (
                <div key={`skeleton-${index}`} className="skeleton-card-horizontal">
                  <div className="skeleton video-thumbnail-skeleton"></div>
                  <div className="skeleton line-skeleton"></div>
                  <div className="skeleton line-skeleton" style={{width: '60%'}}></div>
                </div>
              ))}
            </div>
          ) : (
            <div className="card-container-horizontal">
              <Card3 videos={videos.slice(0, 16)} loading={false} />
            </div>
          )}
        </div>

        <button className="scroll-btn right" onClick={() => scroll("right")}>
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

const HomeGrouped = () => {
  // Fetch all feeds
  const { data: homeData, isLoading: homeLoading } = useQuery({
    queryKey: ["home-grouped"],
    queryFn: fetchHome,
    staleTime: 5 * 60 * 1000, // Consider data fresh for 5 minutes
    gcTime: 10 * 60 * 1000, // Keep in cache for 10 minutes
  });

  const { data: firstUploadsData, isLoading: firstUploadsLoading } = useQuery({
    queryKey: ["firstuploads-grouped"],
    queryFn: fetchFirstUploads,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  const { data: trendingData, isLoading: trendingLoading } = useQuery({
    queryKey: ["trending-grouped"],
    queryFn: fetchTrending,
    staleTime: 5 * 60 * 1000,
    gcTime: 10 * 60 * 1000,
  });

  const { data: newContentData, loading: newContentLoading } = useApolloQuery(NEW_CONTENT, {
    variables: { limit: 50, skip: 0 },
  });

  return (
    <div className="home-grouped-container">
      <VideoRow
        title="Home Feed"
        videos={homeData || []}
        linkTo="/home-feed"
        isLoading={homeLoading}
      />

      <VideoRow
        title="New Content"
        videos={newContentData?.socialFeed?.items || []}
        linkTo="/new"
        isLoading={newContentLoading}
      />

      <VideoRow
        title="Trending"
        videos={trendingData || []}
        linkTo="/trend"
        isLoading={trendingLoading}
      />

      <VideoRow
        title="First Time Uploads"
        videos={firstUploadsData || []}
        linkTo="/firstupload"
        isLoading={firstUploadsLoading}
      />
    </div>
  );
};

export default HomeGrouped;
