import axios from 'axios';

const enagApi=axios.create({
    baseURL:'https://enag.vercel.app/api',
    headers:{
        ['Access-Control-Allow-Origin']:'http://localhost:3000'
    }
})

export default enagApi;