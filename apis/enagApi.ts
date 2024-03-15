import axios from 'axios';

const enagApi=axios.create({
    baseURL:'https://enag.vercel.app/api',
})

export default enagApi;