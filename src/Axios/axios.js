import axios from 'axios';

const instance = axios.create({
    baseURL : 'https://us-central1-amazncloneweb.cloudfunctions.net/api'
    //'http://localhost:5001/amazncloneweb/us-central1/api' //API URL - CLOUD FUNCTION
})

export default instance;