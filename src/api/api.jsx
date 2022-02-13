import Axios from 'axios';

const instance = Axios.create({
  baseURL: 'https://dispex.org/api/vtest',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default instance;
