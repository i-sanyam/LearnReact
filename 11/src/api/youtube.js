import axios from 'axios'
import { GOOGLE_API_KEY } from './config.json'
const KEY = GOOGLE_API_KEY;

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    type: 'video',
    part: 'snippet',
    maxResults: 5,
    key: KEY
  }
});
