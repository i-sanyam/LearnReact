import React, { useEffect, useState } from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [videoState, setVideoState] = useState({
    videos: [],
    selectedVideo: null
  });
  useEffect(() => {
    onSearchSubmit('trending');
  }, []);
  const onSearchSubmit = async query => {
    const response = await youtube.get('/search', {
      params: {
        q: query
      }
    });
    setVideoState({
      videos: response.data.items,
      selectedVideo: response.data.items && response.data.items[0]
    });
  }
  return (
    <div className='ui container'>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={videoState.selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              onVideoSelect={v => setVideoState({
                videos: videoState.videos,
                selectedVideo: v
              })}
              videos={videoState.videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;