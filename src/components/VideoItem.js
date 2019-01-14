import React from 'react';
import './videoItem.css';

function VideoItems(props) {
  function onClick() {
    props.onVideoClick(props.video.id);
  }

  return (
    <div className="videoItem">
      <img
        src={props.video.thumbnails.high.url}
        alt="Image de la vidéo"
        onClick={onClick}
      />
      <h2>{props.video.title}</h2>
      <p>{props.video.description}</p>
    </div>
  );
}

export default VideoItems;
