import axios from 'axios';
import { PATH } from '../utils/api_url';

const host = axios.create({
    baseURL: PATH
})

const authHost = axios.create({
    baseURL: PATH
})

const authInterceptor = config => {
    config.headers.authorization = `Bearer ${localStorage.setItem('token')}`
    return config
}

authHost.interceptors.request.use(authInterceptor)

export{
    host,
    authHost
}