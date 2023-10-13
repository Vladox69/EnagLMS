import axios from 'axios';

const enagApi=axios.create({
    baseURL:'http://localhost:3000/api'
})

export default enagApi;