import axios from 'axios';

const apiConsulta = axios.create({
   baseURL: 'http://apps.widenet.com.br/busca-cep/api/cep/',
   //baseURL: 'https://backend-week10.herokuapp.com/',

});

export default apiConsulta; 