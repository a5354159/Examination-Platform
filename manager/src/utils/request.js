import axios from 'axios'
import { getToken } from '@/utils/user';

// create an axios instance
const service = axios.create({
    // baseURL: 'http://169.254.120.1:7001',
    baseURL: 'http://169.254.0.112:7001',
    // baseURL: 'http://169.254.0.23:7001',
    // withCredentials: true, // 跨域请求时发送 cookies
    timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
    config => {
        // 判断是否有登录态
        if(getToken()){
            // 让每个请求者都携带token
            config.headers['authorization'] = getToken()
        }
        return config;
    },
    error => {
        return Promise.reject(error)
    }
)

// response interceptor
service.interceptors.response.use(
    response => response.data,
    error => {
        return Promise.reject(error)
    }
)

export default service
