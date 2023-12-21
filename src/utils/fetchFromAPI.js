import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com";

const options = {
  params: {
    type: 'video',
    maxResults: "50",
  },
  headers: {
    'X-RapidAPI-Key': '6a2c0ef17amsh85e80eff1b05e87p14a283jsn3a1ce32ab43b',
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};