/*
 * @Author: Wanko
 * @Date: 2023-07-07 16:48:48
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-15 19:48:06
 * @Description: 
 */
import {createStore} from 'vuex';
import api from '../request/api';
export default createStore({
  state: {
    token: uni.getStorageSync('token') || '',
    user: {},
    refreshToken: uni.getStorageSync('refreshToken') || ''
  },
  mutations: {
    setToken(state, token) {
      state.token = token
      uni.setStorageSync('token', token)
    },
    setUser(state, user) {
      uni.setStorageSync('user', user)
      state.user = user
    },
    setRefreshToken(state, refreshToken) {
      state.refreshToken = refreshToken
      uni.setStorageSync('refreshToken', refreshToken)
    },
    logout(state) {
      state.token = ''
      state.user = {}
      state.refreshToken = ''
      uni.removeStorageSync('token')
      uni.removeStorageSync('user')
      uni.removeStorageSync('refreshToken')
    }
  },
  actions: {
    async refreshToken({ commit }) {
      const { token, refreshToken } = await api.refreshToken()
      commit('setToken', token)
      commit('setRefreshToken', refreshToken)
    },
    logout({ commit }) {
      commit('logout')
    }
  }
})