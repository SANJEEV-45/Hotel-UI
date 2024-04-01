import axios from 'axios';

const axiosClient = axios.create({
    baseURL:'http://127.0.0.1:8000/api'
})

axiosClient.interceptors.request.use((config)=>{
    const item = localStorage.getItem('ACCESS_TOKEN');
    config.headers.Authorization = `Bearer ${token}`;
    return config;
})

axiosClient.interceptors.response.use(
    (response)=>{
        return response;
    },
    (error)=>{
        const {response} = error;
     try{
        if(response.status == 401){
            localStorage.removeItem('ACCESS_TOKEN');
        }
     }
     catch(err){
        console.log(err);
     }
     throw error;
  }
)
export default axiosClient;