import axios from 'axios';

const enagApi=axios.create({
    baseURL:'https://enag-jde3b5kc3-vladimir-aguacunchis-projects.vercel.app/api'
})

export default enagApi;