import React, { Component } from 'react';
import AppTitle from './AppTitle';
import SearchBar from './SearchBar';
import VideoPlayer from './VideoPlayer';
import VideoList from './VideoList';
import API_KEY from '../auth.js';
import './app.css';

import YouTube from 'simple-youtube-api';

const youtube = new YouTube(API_KEY);

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      videoID: '',
      searchValue: '',
    };
  }

  async componentDidMount() {
    const resultats = await youtube.searchVideos(`${this.state.videos}`, 4);

    this.setState({
      videos: resultats,
    });

    console.log(resultats);
  }

  onVideoClick(videoID) {
    this.setState({
      videoID,
    });
  }

  onVideoSearch(searchValue) {
    this.setState({
      searchValue,
    });
    console.log(`Mots enregistrés : ${searchValue}`);
    //this.getVideoByTitle();
    this.getVideoByTitle(searchValue);
  }

  async getVideoByTitle(keyword) {
    const videoItem = await youtube.searchVideos(`${keyword}`, 1);

    const videoID = videoItem.map(video => video.id);

    this.setState({
      videoID,
    });

    console.log(videoID);
  }

  render() {
    return (
      <div>
        <AppTitle />
        <SearchBar onVideoSearch={this.onVideoSearch.bind(this)} />
        <div className="containerVideos">
          <VideoPlayer videoID={this.state.videoID} />
          <VideoList
            listVideo={this.state.videos}
            onVideoClick={this.onVideoClick.bind(this)}
          />
        </div>
      </div>
    );
  }
}

export default App;
