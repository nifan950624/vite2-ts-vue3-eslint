import axios, {AxiosRequestConfig, AxiosResponse} from "axios";

interface Response {
  resCode: number
  errorMsg: string 
  data: any
}

const api = axios.create({
  baseURL: '',    // 所有请求的公共地址部分
  timeout: 　3000 // 请求超时时间 这里的意思是当请求时间超过5秒还未取得结果时 提示用户请求超时
})

// interceptors axios的拦截器对象
api.interceptors.request.use<AxiosRequestConfig>(
  async (config) => {
    return config
  }, 
  () => {
    // Todo: 报错处理
  }
)

api.interceptors.response.use<AxiosResponse>(
  async (res) => {
    return res
  }, 
  () => {
    // Todo: 报错处理
  })


const get = async (url: string, params: any, config?: AxiosRequestConfig) => {
  const res = await axios.get(url, {params, ...config,})
  return res as object as Response
}

const  post = async (url: string, data: any, config?: AxiosRequestConfig) => {
  const res = await axios.post(url, {data, ...config,})
  return res as object as Response
}

export {
  get,
  post
} 

