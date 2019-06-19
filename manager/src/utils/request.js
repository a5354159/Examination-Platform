// import axios from "axios";
// import { getToken } from "@/utils/user";

// //实现拦截器, 对请求进行统一判断
// //拦截器
// //请求拦截器
// //响应拦截器
// const service = axios.create({
//   // baseURL: "http://169.254.0.233:7001/",
//   baseURL: "http://169.254.0.112:7001/",
//   timeout: 5000
// });

// // request interceptor 请求拦截
// service.interceptors.request.use(config => {
//   //判断是否有登录态
//   const token = getToken();
//   if (token) {
//     //让每个请求携带authorization
//     config.headers['addUser']=token;
//     config.headers["Authorization"] = token;
//   }
//   return config;
// }, Promise.reject);

// // response interceptor 响应拦截
// service.interceptors.response.use(response => {
//   // console.log('响应拦截:',response);
//   return response.data
// }, Promise.reject);

// export default service;
// export const  getRequest=({url,params={}})=>{
//   return service({
// 		url,
//     method:'GET',
//     params
// 	})
// }
// export const  postRequest=({url,data={}})=>{
//   return service({
// 		url,
//     method:'POST',
//     data
// 	})
// }
// export const  putRequest=({url,data={}})=>{
//   return service({
// 		url,
//     method:'PUT',
//     data
// 	})
// }

// export const deleteRequest=({url,params={}})=>{
//   return service({
// 		url,
//     method:'DELETE',
//     params
// 	})
// }


import axios from 'axios'
import { getToken } from "@/utils/user"
// create an axios instance
const service = axios.create({
  // baseURL: 'http://169.254.0.112:7001/',
  baseURL: 'http://192.168.43.106:7001/',
  // baseURL: 'http://172.20.10.5:7001/',
  // withCredentials: true, // 跨域请求时发送 cookies
  timeout: 5000 // request timeout
})

// request interceptor
service.interceptors.request.use(
  config => {
    //判断是否登录状态
    if (getToken()) {
      //让每个请求携带authorization
      config.headers['authorization'] = getToken()
    }
    return config
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