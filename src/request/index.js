/*
 * @Author: Wanko
 * @Date: 2023-05-18 15:22:51
 * @LastEditors: Wanko
 * @LastEditTime: 2024-01-15 17:22:27
 * @Description:
 */
// import request from '../caring-request'
import request from 'caring-request'
import { INTERFACE, PATH } from './namespace'
import store from '../store'

request.defaults.baseURL = PATH

request.interceptors.request.use((config) => {
  const assessToken = store.state.assessToken
  
  if (INTERFACE[config.url]) config.url = INTERFACE[config.url]
  if (config.token) {
    // 需要token
    if (assessToken) {
      config.header['Authorization'] = `Bearer ${assessToken}`
    } else {
      console.log('退出登录')
    }
  }
  return config
})

request.interceptors.response.use((response) => {
  // response.code = 30008
  // response.message = '请求成功'
  let { code, config } = response
  const { raw, error } = config
  if (!code) {
    // 请求成功
    if (raw) {
      return response
    } else {
      return response.data
    }
  } else if (code === 30007) {
    console.log('token过期')
    // return request()
  } else {
    // 响应异常
    if (error) {
      // 手动处理异常
      return Promise.reject(response)
    } else {
      // 自动处理异常
      uni.showToast({
        icon: 'none',
        title: response.message
      })
    }
  }
})

const install = (Vue) => {
  Vue.config.globalProperties.$request = request
  // Vue..$request = request
}

export default {
  install
}
