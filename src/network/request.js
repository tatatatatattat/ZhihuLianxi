// 封装axios 
import axios from 'axios'
export function request(config){
     const instance = axios.create({
         baseURL:'http://yapi.weilaigongzuo.com/mock/441',
         timeout:5000,
     });
     instance.interceptors.request.use(config=>{
         return config
     },err=>{

     });
     instance.interceptors.response.use(res=>{
         return res.data
     },err=>{

     })
     return instance(config)
}