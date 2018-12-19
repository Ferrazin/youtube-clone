import React from "react";

const VideoDetail = ({ video }) => {
  if (!video) {
    return <div>Loading...</div>;
  }
  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div class="col s7" id="details">
      <div className="video-container">
        <iframe src={url} />
      </div>
      <div className="details">
        <blockquote>
          <h4>{video.snippet.title}</h4>
          <div>{video.snippet.description}</div>
        </blockquote>
      </div>
    </div>
  );
};

export default VideoDetail;
