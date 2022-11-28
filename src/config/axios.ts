import axios from "axios";

const API_URL = "https://api.imgur.com/3/gallery";

export default axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
    'Authorization': 'Client-ID 0408f6546f534d1',
  }
});