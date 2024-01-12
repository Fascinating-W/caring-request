/*
 * @Author: Wanko
 * @Date: 2023-07-07 16:48:48
 * @LastEditors: Wanko
 * @LastEditTime: 2023-07-08 19:33:26
 * @Description: 
 */
import {createStore} from 'vuex';

import request from '../request';
export default createStore({
  state: {
    assessToken: 'assessToken'
  },
  actions: {
    refreshToken({commit, state}) {
      return request()
    }
  }
})