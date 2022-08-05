import * as axios from 'axios'
// import { useSelector } from 'react-redux';
// var token = useSelector(state => state.users.token);


 export const axiosClient = axios.create(
   
  {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      
    }
  });
