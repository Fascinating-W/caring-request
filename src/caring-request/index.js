/*
 * @Author: Wanko
 * @Date: 2023-05-17 14:44:28
 * @LastEditors: Wanko
 * @LastEditTime: 2024-01-15 16:41:53
 * @Description: 
 */

import Request  from "./lib/core/Request"
import defaultConfig from './lib/default'
import mergeConfig from "./lib/core/mergeConfig"
// 创建实例
function createInstance(defaultConfig) {
  const request = new Request(defaultConfig)
  const instance = Request.prototype.request.bind(request)
  Object.setPrototypeOf(instance, request)
  return instance
}

const request = createInstance(defaultConfig)

// 添加create方法
request.create = function create(config) {
  return createInstance(mergeConfig(defaultConfig, config))
}

export default request

