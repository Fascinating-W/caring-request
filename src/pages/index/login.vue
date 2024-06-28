<template>
  <div class="p">
    <div class="bg-white border rounded p">
      <input type="text" placeholder="用户名" v-model="name"/>
    </div>
    <div class="bg-white border rounded p mt-10">
      <input type="text" placeholder="密码" v-model="password"/>
    </div>
    <div class="mt">
      <button type="primary" @click="onLogin">登录</button>
    </div>
  </div>
</template>

<script>
import route from 'caring-route'

export default {
  data() {
    return {
      name: '',
      password: ''
    }
  },
  methods: {
    onLogin() {
      if(!this.name) return
      if(!this.password) return
      const data = {
        name: this.name,
        password: this.password
      }
      this.$api.login(data).then((res) => {
        const {token, refreshToken, user} = res
        this.$store.commit('setToken', token)
        this.$store.commit('setUser', user)
        this.$store.commit('setRefreshToken', refreshToken)
        route('/pages/index/index')
      })
    }
  },
}
</script>

<style lang="scss" scoped></style>
