import React, { Component } from 'react';
import './videoPlayer.css';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      video: '',
    };
  }

  componentWillReceiveProps(props) {
    this.setState({
      video: props.videoID[0],
    });
    console.log(this.props.videoID[0]);
  }

  render() {
    return (
      <div className="videoPlayer">
        <div className="videoPlayerContainer">
          <iframe src={`https://www.youtube.com/embed/${this.props.videoID}`} />
        </div>
      </div>
    );
  }
}

export default VideoPlayer;
