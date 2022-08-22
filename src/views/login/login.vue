<template>
  <div class="login">
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <span>账号登录</span>
        </template>
        <login-account ref="accountRef"></login-account>
      </el-tab-pane>
      <el-tab-pane label="Config">
        <template #label>
          <span>手机登录</span>
        </template>
        <login-panel></login-panel>
      </el-tab-pane>
    </el-tabs>
    <el-row type="flex" justify="space-between" align="middle">
      <el-col :span="2">
        <el-checkbox v-model="isremember">记住密码</el-checkbox>
      </el-col>
      <el-col :span="4">
        <el-link>忘记密码</el-link>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <el-button type="primary" class="loginBtn" @click="handleLogin"
          >立即登录</el-button
        >
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import LoginAccount from './components/login-account.vue'
import LoginPanel from './components/login-panel.vue'
export default defineComponent({
  name: 'Login',
  components: {
    LoginAccount,
    LoginPanel
  },
  setup() {
    let isremember = ref(true)
    let accountRef = ref<InstanceType<typeof LoginAccount>>()
    function handleLogin() {
      accountRef.value?.LOGIN(isremember.value)
    }
    return {
      isremember,
      handleLogin,
      accountRef
    }
  }
})
</script>

<style lang="less" scoped>
.login {
  margin: 0 auto;
  width: 400px;
  .loginBtn {
    width: 100%;
    margin-top: 10px;
  }
}
</style>
