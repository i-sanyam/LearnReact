import axios from 'axios'
import { GOOGLE_API_KEY } from './config.json'

export default axios.create({
  baseURL: 'https://translation.googleapis.com/language',
  params: {
    key: GOOGLE_API_KEY,
    format: 'text'
  }
});
