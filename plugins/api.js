import axios from 'axios';
import qs from 'qs';

let instanceAxios = axios.create();

console.log(instanceAxios)


//test api
export const icanhazip = params => {
  return instanceAxios.post(`http://icanhazip.com`, qs.stringify(params)).then(res => res.data);
};
