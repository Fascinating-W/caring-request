/*
 * @Author: Wanko
 * @Date: 2023-05-18 15:22:51
 * @LastEditors: Wanko
 * @LastEditTime: 2023-05-19 10:53:11
 * @Description:
 */
import request from '../../dist'
import { INTERFACE, PATH } from './namespace'

request.defaults.baseURL = PATH

request.interceptors.request.use((config) => {
  config.url = INTERFACE[config.url]
  return config
})
request.interceptors.response.use((response) => {
  response.message = '请求成功'
  return response
})

const install = (Vue) => {
  Vue.config.globalProperties.$request = request
  // Vue..$request = request
}

export default {
  install
}
