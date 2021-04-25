import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID czkk0Ad5r44tL-3WLfsnO1I7X_yTVw6GfTcIYEcXpnw'
  }
});