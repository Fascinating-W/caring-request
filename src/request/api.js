/*
 * @Author: Wanko
 * @Date: 2023-05-18 15:49:47
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-15 19:37:15
 * @Description: 
 */
import request from "caring-request"


export const getUsers = () => request('/users')
export const getUser = (id) => request(`/users/${id}`)
export const delUser = (id) => request.delete(`/users/${id}`)
export const login = (data) =>request.post('/users/login', data)
export const refreshToken = () =>
  request.post('/users/refresh', null, {
    refreshToken: true
  })

const api = {
  getUsers,
  getUser,
  delUser,
  login,
  refreshToken
}

export default api