import { useEffect, useState } from "react";
import youtube from '../api/youtube'

const useVideos = (defaultSearchTerm) => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    search(defaultSearchTerm);
  }, [defaultSearchTerm]);

  const search = async query => {
    const response = await youtube.get('/search', {
      params: {
        q: query
      }
    });
    setVideos(response.data.items);
  }

  return [videos, search];
}

export default useVideos;