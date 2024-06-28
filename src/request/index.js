/*
 * @Author: Wanko
 * @Date: 2023-05-18 15:22:51
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-15 19:31:15
 * @Description:
 */
// import request from '../caring-request'
import request from 'caring-request'
import { INTERFACE, PATH } from './namespace'
import store from '../store'
import api from './api.js'
request.defaults.baseURL = PATH
import route from 'caring-route'
request.interceptors.request.use((config) => {
  const { token, refreshToken } = store.state
  if (INTERFACE[config.url]) config.url = INTERFACE[config.url]
  if (config.refreshToken) {
    config.header['Authorization'] = `Bearer ${refreshToken}`
  } else if (!config.withoutToken) {
    config.header['Authorization'] = `Bearer ${token}`
  }
  return config
})

request.interceptors.response.use(async (response) => {
  // response.code = 30008
  // response.message = '请求成功'
  console.log(response)
  let { code, config } = response
  const { raw, error } = config
  if (!code) {
    // 请求成功
    if (raw) {
      return response
    } else {
      return response.data
    }
  } else if (code === 30001) {
    route('/pages/index/login')
    return Promise.reject('未登录')
  } else if (code === 30007) {
    console.log('token过期')
    try {
      await store.dispatch('refreshToken')
      return request(config)
    } catch (error) {
      console.error('刷新 token 失败', error)
      route('/pages/index/login') // 跳转到登录页或者其他处理方式
      return Promise.reject('token刷新失败')
    }

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
  Vue.config.globalProperties.$api = api
  // Vue..$request = request
}

export default {
  install
}
