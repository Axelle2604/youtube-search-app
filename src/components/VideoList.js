import React from 'react';
import VideoItem from './VideoItem.js';
import './videoList.css';

function VideoList(props) {
  return (
    <div className="videoList">
      {props.listVideo.map(video => (
        <VideoItem
          onVideoClick={props.onVideoClick}
          key={video.id}
          video={video}
        />
      ))}
    </div>
  );
}
export default VideoList;
