/*
 * @Author: Wanko
 * @Date: 2023-05-18 15:49:47
 * @LastEditors: Wanko
 * @LastEditTime: 2023-05-19 11:02:49
 * @Description: 
 */
import request from "../caring-request"

const TODO = d => request('/url', d, {})

const api = {
  TODO: (d) => request('/url', d, {})
  
}

this.$api.TODO()