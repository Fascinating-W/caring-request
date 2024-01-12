/*
 * @Author: Wanko
 * @Date: 2023-05-17 18:07:49
 * @LastEditors: Wanko
 * @LastEditTime: 2024-01-12 23:29:22
 * @Description:
 */
/**
 * @Description: 是否是一个绝对地址，如http:// 或者//
 * @param {string} url
 * @return {*}
 */
export function isAbsoluteURL(url) {
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url)
}

export function combineURL(baseURL, relativeURL) {
  // 删掉baseURL末尾的/ 和要拼接的relativeURL的开头url,防止用户的书写不规范
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL
}

export function transformURL(config) {
  let { url, baseURL } = config
  if (baseURL && !isAbsoluteURL(url)) {
    return combineURL(baseURL, url)
  } else if (isAbsoluteURL(url)) {
    return config.url
  } else {
    throw new Error('无效的url,未配置baseURL', url, baseURL)
  }
}
