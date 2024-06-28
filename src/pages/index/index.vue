<!--
 * @Author: Wanko
 * @Date: 2023-05-17 14:42:53
 * @LastEditors: Wanko
 * @LastEditTime: 2024-06-15 19:48:08
 * @Description: 
-->
<template>
  <div>
    <!-- <button @click="getUsers">获取用户列表</button> -->
    <!-- <button @click="getUser">获取单个用户</button> -->
    <div class="m p bg-white rounded justify-between flex-center" v-for="i in users">
      <div>{{ i.name }}</div>
      <div @click="onDelete(i)">
        删除
      </div>
    </div>
     <div class="mt">
      <button type="warn" @click="onLogout">退出登录</button>
    </div>
  </div>
</template>

<script>
import uniApp from 'caring-uni'
export default {
  data() {
    return {
      users: null
    }
  },
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
  async onShow() {
    const users = await this.$request('users')
    this.users = users
    console.log(uniApp)
  },
  methods: {
    onLogout(){
      this.$store.dispatch('logout')
    },
    async onDelete({_id}) {
      await this.$api.delUser(_id)
      uniApp.toast('删除成功')
      this.getUsers()
    },
    async getUser() {
      const user = await this.$request(`users/6618a435ed8180b570414a18`)
      console.log(user)
    },
    async getUsers() {
      const users = await this.$api.getUsers()
      console.log(users)
      this.users = users
      // const res = await request.get('https://huaiyi.chinacaring.com:28081/api/test/public/dept')
      // const res = await this.$request.get('users', '', {raw: true})
      // await this.$request.get(`DEPT`,'', {
      //   raw: true
      // })
      // await this.$request('DEPT', 'abc/123423423423')
      // await this.$request({
      //   url: 'DEPT',
      // })
    }
  }
}
</script>

<style lang="scss" scoped></style>
