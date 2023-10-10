import axios from 'axios';

const enagApi=axios.create({
    baseURL:'/api'
})

export default enagApi;