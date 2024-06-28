/*
 * @Author: Wanko
 * @Date: 2023-05-17 17:08:34
 * @LastEditors: Wanko
 * @LastEditTime: 2024-03-25 11:16:53
 * @Description: 
 */
export function isPlainObject(val) {
  return toString.call(val) === '[object Object]'
}

/**
 * @Description: 普通对象的深拷贝
 * @param {array} objs  多个参数
 * @return {*}
 */
export function deepMerge(...objs) {
  const result = Object.create(null)
  objs.forEach((obj) => {
    if (obj) {
      Object.keys(obj).forEach((key) => {
        const val = obj[key]
        if (isPlainObject(val)) {
          if (isPlainObject(result[key])) {
            result[key] = deepMerge(result[key], val)
          } else {
            result[key] = deepMerge(val)
          }
        } else {
          result[key] = val
        }
      })
    }
  })

  return result
}
