import React, { useEffect, useState } from 'react';
import youtube from '../api/youtube';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);
  
  useEffect(() => {
    onSearchSubmit('trending');
  }, []);
  const onSearchSubmit = async query => {
    const response = await youtube.get('/search', {
      params: {
        q: query
      }
    });
    setVideos(response.data.items);
    setSelectedVideo(response.data.items && response.data.items[0]);
  }
  return (
    <div className='ui container'>
      <SearchBar onSearchSubmit={onSearchSubmit} />
      <div className='ui grid'>
        <div className='ui row'>
          <div className='eleven wide column'>
            <VideoDetail video={selectedVideo} />
          </div>
          <div className='five wide column'>
            <VideoList
              onVideoSelect={setSelectedVideo}
              videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;