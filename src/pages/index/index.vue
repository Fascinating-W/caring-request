<!--
 * @Author: Wanko
 * @Date: 2023-05-17 14:42:53
 * @LastEditors: Wanko
 * @LastEditTime: 2024-01-12 23:37:08
 * @Description: 
-->
<template>
  <div>
    <button @click="getDept">get dept</button>
  </div>
</template>

<script>
import request from '../../caring-request'
export default {
  async mounted() {
    // request.delete('http://jsonplaceholder.typicode.com/todos/1', {
    //   name: '22222',
    //   header: {
    //     'xxx':'xxxxx'
    //   }
    // })
    // request.get('http://jsonplaceholder.typicode.com/todos/1',{}, {
    //   name: '22222',
    //   header: {
    //     'xxx':'xxxxx'
    //   }
    // })
    // request.defaults.baseURL = 'http://www.baidu.com'
    // request.interceptors.request.use(config => {
    //   console.log(config)
    //   config.header = {
    //     name: 'wanko'
    //   }
    //   return config
    // })
    // request.interceptors.response.use(response => {
    //   console.log(response, 'response')
    //   response.message = '请求成功'
      
    //   return response
    // })
    // request(
    //   // 'https://jsonplaceholder.typicode.com/todos/1',
    //   'aaa/ccc',
    //   { name: 'wanko' },
    //   {
    //     header: {
    //       xxxx: '2222'
    //     },
    //     token: true
    //   }
    // )
    // const d = await request({
    //   url: 'http://jsonplaceholder.typicode.com/todos/1',
    //   data: { name: 'wanko' },
    //   header: {
    //     xxxx: '2222'
    //   }
    // })
    // const d = await this.$request.get('TODO_1', {}, {raw: true})
    // request({
    //   url: ,
    //   data: { name: 'wanko' },
    //   header: {
    //     xxxx: '2222'
    //   },
    //   token: true
    // })

    // const instance = request.create({
    //   baseURL: 'https://some-domain.com/api/',
    //   timeout: 1000,
    //   header: { 'X-Custom-Header': 'foobar' },
    //   error: true
    // })
    // instance(
    //   // 'https://jsonplaceholder.typicode.com/todos/1',
    //   'aaa/ccc',
    //   { name: 'wanko' },
    //   {
    //     header: {
    //       xxxx: '2222'
    //     },
    //     token: true
    //   }
    // ).catch((err) => {
    //   console.log(err)
    // })
  },
  methods: {
    async getDept() {
      console.log('getDept')
      // const res = await request.get('https://huaiyi.chinacaring.com:28081/api/test/public/dept')
      const res = await this.$request.get('DEPT', '', {raw: true})
      // await this.$request.get(`DEPT`,'', {
      //   raw: true
      // })
      // await this.$request('DEPT', 'abc/123423423423')

      // await this.$request({
      //   url: 'DEPT',
      // })
      console.log(res)
      
    }
  },
}
</script>

<style lang="scss" scoped></style>
