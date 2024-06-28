/*
 * @Author: Wanko
 * @Date: 2023-05-17 18:09:58
 * @LastEditors: Wanko
 * @LastEditTime: 2024-03-19 00:01:52
 * @Description:
 */
import { transformURL } from '../helpers/url'

export default function dispatchRequest(config) {
  
  return new Promise((resolve, reject) => {
    config.url = transformURL(config)
    let { data, url } = config
    if (typeof url !== 'string') return reject(new Error('url must be string'))

    if (typeof data === 'number') config.data = data.toString()
    if (typeof data === 'string') {
      // 路径参数
      config.url = data ? `${url}/${data}` : url
      data = ''
    }

    config.complete = (response) => {
      response.config = config
      // 请求返回后，隐藏loading(如果请求返回快的话，可能会没有loading)
      uni.hideLoading()
      // 清除定时器，如果loadingTime内请求回来了，就无需loading
      clearTimeout(config.timer)
      config.timer = null
      // 判断是否服务端返回成功
      if (response.statusCode === 200) {
        // 判断用户对拦截返回数据的要求，如果raw为true，返回所有的数据(response)到拦截器，否则只返回response.data
        const { data, header, config } = response
        resolve({ ...data, header, config })
      } else {
        // 处理错误
        console.warn('服务端状态码不为200')
        let { statusCode, errMsg, data } = response
        switch (statusCode) {
          case 400:
            errMsg = '请求错误'
            break
          case 401:
            errMsg = '未授权，请登录'
            break
          case 403:
            errMsg = '拒绝访问'
            break
          case 404:
            errMsg = `请求地址出错: ${response.config.url}`
            break
          case 408:
            errMsg = '请求超时'
            break
          case 500:
            errMsg = '服务器内部错误'
            break
          case 501:
            errMsg = '服务未实现'
            break
          case 502:
            errMsg = '网关错误'
            break
          case 503:
            errMsg = '服务不可用'
            break
          case 504:
            errMsg = '网关超时'
            break
          case 505:
            errMsg = 'HTTP版本不受支持'
            break
          default:
            break
        }
        uni.showModal({
          title: errMsg,
          content: data,
          showCancel: false
        })
        reject(response)
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
    uni.request(config)
  })
}
