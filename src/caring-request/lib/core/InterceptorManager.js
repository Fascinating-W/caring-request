/*
 * @Author: Wanko
 * @Date: 2023-05-18 15:07:46
 * @LastEditors: Wanko
 * @LastEditTime: 2023-05-18 15:09:33
 * @Description: 
 */
export default class InterceptorManager {
  constructor() {
    this.interceptors = []
  }
  // use添加拦截器
  use(resolved, rejected) {
    this.interceptors.push({
      resolved,
      rejected
    })
    return this.interceptors.length - 1
  }

  // 遍历拦截器
  forEach(fn) {
    this.interceptors.forEach((interceptor) => {
      if (interceptor !== null) {
        fn(interceptor)
      }
    })
  }
  // 删除拦截器
  eject(id) {
    if (this.interceptors[id]) {
      this.interceptors[id] = null
    }
  }
}
