import axios from 'axios';

/*  
  prod= https://enag.vercel.app/api 
  dev = http://localhost:3000/api
  */

const enagApi=axios.create({
    baseURL:'https://enag.vercel.app/api',
})

export default enagApi;