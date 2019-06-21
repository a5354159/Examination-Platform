import axios from "axios";
import { getToken } from "@/utils/user";

//实现拦截器, 对请求进行统一判断
//拦截器
//请求拦截器
//响应拦截器
const service = axios.create({
  baseURL: "http://127.0.0.1:7001/",

  timeout: 5000
});

// request interceptor 请求拦截
service.interceptors.request.use(config => {
  //判断是否有登录态
  const token = getToken();
  if (token) {
    //让每个请求携带authorization
    config.headers['addUser']=token;
    config.headers["Authorization"] = token;
  }
  return config;
}, Promise.reject);

// response interceptor 响应拦截
service.interceptors.response.use(response => {
  return response.data
}, Promise.reject);
export default service;
export const  getRequest=({url,params={}})=>{
  return service({
		url,
    method:'GET',
    params
	})
}
export const  postRequest=({url,params={}})=>{
  return service({
		url,
    method:'POST',
    data:params
	})
}
export const  putRequest=({url,params={}})=>{
  return service({
		url,
    method:'PUT',
    data:params
	})
}

export const deleteRequest=({url,params={}})=>{
  return service({
		url,
    method:'DELETE',
    params
	})
}