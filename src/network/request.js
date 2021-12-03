import axios from 'axios'
import qs from "qs";


export function request(config) {
  // //创建axios实例
  // const instance = axios.creat({
  //   baseURL: 'http://www.blogry.cn',
  //   timeout: 5000
  // })

  // 1.创建实例
  const instance = axios.create({
    //baseURL: "http://localhost:3000",
    baseURL: "http://www.blogry.cn", //手机检测时，换该地址
    timeout: 5000
  });
  // 2.给post请求的data 用qs.stringify转换成URL格式
  if (config.data != null && Object.keys(config.data).length != 0) {
    config.data = qs.stringify(config.data);
  }


  //axios拦截器
  //请求拦截
  instance.interceptors.request.use(config => {
    console.log(config)
    return config
  }), err => {
    console.log(err)
  }
  //响应拦截
  instance.interceptors.response.use(res => {
    console.log(res)
    return res.data
  }), err => {
    console.log(err)
  }
  //发送网络请求
  return instance(config)
}