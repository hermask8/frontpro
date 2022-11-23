import axios from 'axios';

export default axios.create({
  baseURL: ' https://chat-api-is.herokuapp.com/api', //Dummy URL
  headers: {
    'Content-type': 'application/json',
  },
});
