import axios from 'axios';

/*  
  prod= https://www.enag.es/api 
  dev = http://localhost:3000/api
  */

const enagApi=axios.create({
    baseURL:'https://www.enag.es/api',
})

export default enagApi;