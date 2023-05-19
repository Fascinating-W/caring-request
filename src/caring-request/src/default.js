/*
 * @Author: Wanko
 * @Date: 2023-05-17 17:27:51
 * @LastEditors: Wanko
 * @LastEditTime: 2023-05-17 20:55:46
 * @Description: 请求的默认配置
 */
export default {
  baseURL: '', // 请求的根域名
  // 默认的请求头
  header: {},
  method: 'GET',
  // 设置为json，返回后uni.request会对数据进行一次JSON.parse
  dataType: 'json',
  // 此参数无需处理，因为5+和支付宝小程序不支持，默认为text即可
  responseType: 'text',
  timeout: 60000,
  loading: true, // 是否展示loading
  loadingText: '请求中...',
  loadingTime: 800, // 在此时间内，请求还没回来的话，就显示加载中动画，单位ms
  loadingMask: true, // 展示loading的时候，是否给一个透明的蒙层，防止触摸穿透
  timer: null, // 定时器,
  raw: false, // 是否返回原始请求数据
  error: false // 是否由用户处理错误
}
