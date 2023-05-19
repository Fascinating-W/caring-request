<!--
 * @Author: Wanko
 * @Date: 2023-05-17 14:42:53
 * @LastEditors: Wanko
 * @LastEditTime: 2023-05-19 10:16:54
 * @Description: 
-->
<template>
  <div></div>
</template>

<script>
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
    const d = await this.$request.get('TODO_1', {}, {raw: true})
    console.log(d)
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
  }
}
</script>

<style lang="scss" scoped></style>
