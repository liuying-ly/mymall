import axios from 'axios'

export function request(config) {
  //创建axios实例
  const instance = axios.creat({
    baseURL: 'http://12.23.43545:8080',
    timeout: 5000
  })
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