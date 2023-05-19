/*
 * @Author: Wanko
 * @Date: 2023-05-17 14:55:12
 * @LastEditors: Wanko
 * @LastEditTime: 2023-05-19 10:16:27
 * @Description:
 */
import { isPlainObject } from '../helpers/util'
import mergeConfig from './mergeConfig'
import dispatchRequest from './dispatchRequest'
import InterceptorManager from './InterceptorManager'

export default class Request {
  constructor(initConfig) {
    this.defaults = initConfig
    this.interceptors = {
      request: new InterceptorManager(),
      response: new InterceptorManager()
    }
  }
  // 统一请求
  request(url, ...args) {
    let data, config
    if (typeof url === 'string') {
      // 空url退出
      if (!url.trim()) return
      ;[data = {}, config = {}] = args

      Object.assign(config, {
        url,
        data
      })
    } else if (isPlainObject(url)) {
      // url是object
      config = url
    } else {
      return
    }
    // 合并配置

    config = mergeConfig(this.defaults, config)
    console.log(config)
    // processConfig(config)

    // 配置拦截器
    const chain = [
      {
        resolved: dispatchRequest,
        rejected: undefined
      }
    ]
    this.interceptors.request.forEach((interceptor) => {
      chain.unshift(interceptor)
    })

    this.interceptors.response.forEach((interceptor) => {
      chain.push(interceptor)
    })
    let promise = Promise.resolve(config)
    while (chain.length) {
      const { resolved, rejected } = chain.shift()
      promise = promise.then(resolved, rejected)
    }

    return promise
  }
  get(...args) {
    return this._handleParams('get', ...args)
  }
  delete(...args) {
    return this._handleParams('delete', ...args)
  }
  post(...args) {
    return this._handleParams('post', ...args)
  }
  put(...args) {
    return this._handleParams('post', ...args)
  }
  _handleParams(method, ...args) {
    // 空参数退出
    if (!args.length) return
    const [url] = args
    // 不是 url 退出
    if (typeof url !== 'string') return
    // 空url退出
    if (!url.trim()) return

    let data, config
    if (method === 'delete') {
      ;[, config = {}] = args
      Object.assign(config, {
        method,
        url
      })
    } else {
      // 带data的请求
      ;[, data = {}, config = {}] = args
      Object.assign(config, {
        method,
        data,
        url
      })
    }
    return this.request(config)
  }
}
