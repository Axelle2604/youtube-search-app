import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App.js';
import AppTitle from './components/AppTitle.js';
import SearchBar from './components/SearchBar.js';
import VideoPlayer from './components/VideoPlayer.js';
import VideoList from './components/VideoList.js';
import VideoItem from './components/VideoItem.js';

function AppComponent() {
  return <App />;
}

ReactDOM.render(<AppComponent />, document.getElementById('root'));
