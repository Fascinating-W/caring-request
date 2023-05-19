/*
 * @Author: Wanko
 * @Date: 2023-05-17 18:09:58
 * @LastEditors: Wanko
 * @LastEditTime: 2023-05-19 10:16:42
 * @Description:
 */
import { transformURL } from '../helpers/url'

export default function dispatchRequest(config) {
  // 拼接地址，放到最终发送请求之前
  config.url = transformURL(config)
  return new Promise((resolve, reject) => {
    config.complete = (response) => {
      // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
      uni.hideLoading()
      // 清除定时器，如果loadingTime内请求回来了，就无需loading
      clearTimeout(config.timer)
      config.timer = null
      // 判断是否服务端返回成功

      console.log(response)
      if (response.statusCode === 200) {
        // 判断用户对拦截返回数据的要求，如果raw为true，返回所有的数据(response)到拦截器，否则只返回response.data
        if (config.raw) {
          // 判断是否存在响应拦截器
          resolve(response)
          // if (
          //   this.interceptor.response &&
          //   typeof this.interceptor.response === 'function'
          // ) {
          //   // resInterceptors: 拦截器处理过后的响应对象
          //   let resInterceptors = this.interceptor.response(response)
          //   // 如果拦截器不返回false，就将拦截器返回的内容给this.$c.request的then回调
          //   if (resInterceptors !== false) {
          //     resolve(resInterceptors)
          //   } else {
          //     // 如果拦截器返回false，意味着拦截器定义者认为返回有问题，直接接入catch回调
          //     reject(response)
          //   }
          // } else {
          //   // 如果要求返回原始数据，就算没有拦截器，也返回最原始的数据
          //   resolve(response)
          // }
        } else {
          // 不返回原始数据
          resolve(response.data)
          // if (
          //   this.interceptor.response &&
          //   typeof this.interceptor.response === 'function'
          // ) {
          //   let resInterceptors = this.interceptor.response(response.data)
          //   if (resInterceptors !== false) {
          //     resolve(resInterceptors)
          //   } else {
          //     reject(response.data)
          //   }
          // } else {
          //   // 如果不是返回原始数据(raw=false)，且没有拦截器的情况下，返回纯数据给then回调
          //   resolve(response.data)
          // }
        }
      } else {
        // 处理错误
        console.warn('服务端状态码不为200')
        // 是否需要手动处理
        if (config.error) {
          console.error('抛出错误由用户自定义处理')
          reject(response)
        } else {
          // 统一处理错误
          uni.showModal({
            title: response.errMsg,
            showCancel: false
          })
        }
      }
    }
    if (config.loading && !config.timer) {
      config.timer = setTimeout(() => {
        uni.showLoading({
          title: config.loadingText,
          mask: config.loadingMask
        })
        config.timer = null
      }, config.loadingTime)
    }
    console.log(config)
    uni.request(config)
  })
}
