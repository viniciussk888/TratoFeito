import axios from 'axios';

const api = axios.create({
   baseURL: 'http://10.0.0.107:3333',
   //baseURL: 'https://backend-week10.herokuapp.com/',

});

export default api; 