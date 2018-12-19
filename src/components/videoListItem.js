import React from "react";

const VideoListItem = ({ video, onVideoSelect }) => {
  const imageUrl = video.snippet.thumbnails.default.url;
  return (
    <li onClick={() => onVideoSelect(video)} className="list-group-item">
      <div className="collection-list-item">
        <div className="media-left">
          <img className="thumbnail" src={imageUrl} alt="" />
        </div>
        <div className="media-body">
          <blockquote>
            <div className="media-heading">{video.snippet.title}</div>
          </blockquote>
        </div>
      </div>
    </li>
  );
};

export default VideoListItem;
