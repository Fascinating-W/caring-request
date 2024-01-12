/*
 * @Author: Wanko
 * @Date: 2023-05-17 17:38:24
 * @LastEditors: Wanko
 * @LastEditTime: 2024-01-12 23:32:42
 * @Description:
 */
import { deepMerge, isPlainObject } from '../helpers/util'

const strats = Object.create(null)

// 优先取用户配置，没有则取默认配置
function defaultStrat(val1, val2) {
  return typeof val2 !== 'undefined' ? val2 : val1
}
/**
 * @Description: 只取用户配置
 */
function fromVal2Strat(val1, val2) {
  if (typeof val2 !== 'undefined') return val2
}
// 深度合并的配置
function deepMergeStrat(val1, val2) {
  if (isPlainObject(val2)) {
    return deepMerge(val1, val2)
    // val2 !== 'undefined' 判断 val2有值且不是一个对象
  } else if (typeof val2 !== 'undefined') {
    return val2
  } else if (isPlainObject(val1)) {
    return deepMerge(val1)
  } else {
    return val1
  }
}

// 不取默认配置，只从传入的配置取
const stratKeysFromVal2 = ['url']

stratKeysFromVal2.forEach((key) => {
  strats[key] = fromVal2Strat
})

const stratKeysDeepMerge = ['header', 'auth']

stratKeysDeepMerge.forEach((key) => {
  strats[key] = deepMergeStrat
})

/**
 *
 * @param {*} config1 默认配置
 * @param {*} config2 传入的配置
 */
export default function mergeConfig(config1, config2) {
  if (!config2) {
    config2 = {}
  }
  const config = Object.create(null)

  for (let key in config1) {
    if (!config2[key]) {
      mergeField(key)
    }
  }
  for (let key in config2) {
    mergeField(key)
  }

  function mergeField(key) {
    const strat = strats[key] || defaultStrat
    config[key] = strat(config1[key], config2[key])
  }
  return config
}