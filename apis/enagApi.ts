import axios from 'axios';

const enagApi=axios.create({
    baseURL:'https://enag.vercel.app/api',
    headers:{
        ['Access-Control-Allow-Origin']:'*',
        ['Access-Control-Allow-Methods']:'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        ['Access-Control-Allow-Headers']:'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version',
        ['Access-Control-Allow-Credentials']:'true'
    }
})

export default enagApi;