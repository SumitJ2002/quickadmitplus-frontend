import axios from 'axios';

const http = axios.create({
    baseURL:"https://quickadmitplus.onrender.com",
    headers:{
        'jwtoken':document.cookie.replace(/(?:(?:^|.*;\s*)jwtoken\s*=\s*([^;]*).*$)|^.*$/, '$1')
        
    }
})

export default http;
