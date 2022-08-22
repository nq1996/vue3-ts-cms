<template>
  <div class="login-account">
    <el-form :rules="rules" :model="account" ref="accountRef">
      <el-form-item label="账号" prop="name">
        <el-input v-model="account.name"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input v-model="account.password" show-password></el-input>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useStore } from 'vuex'
import { rules } from '../config'
import { ElForm } from 'element-plus/lib/components'
import LocalCache from '@/utils/cache'
export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    const store = useStore()
    let account = reactive({
      name: LocalCache.getCache('name') ?? '',
      password: LocalCache.getCache('password') ?? ''
    })
    let accountRef = ref<InstanceType<typeof ElForm>>()
    const LOGIN = (isremember: boolean) => {
      accountRef.value?.validate((valid) => {
        if (valid) {
          //1.是否记住密码
          if (isremember) {
            LocalCache.setCache('name', account.name)
            LocalCache.setCache('password', account.password)
          } else {
            LocalCache.deleteCache('name')
            LocalCache.deleteCache('password')
          }
          // 2.进行登录
          store.dispatch('LoginModule/accountLogin', { ...account })
        }
      })
    }
    return {
      account,
      rules,
      LOGIN,
      accountRef
    }
  }
})
</script>

<style lang="less" scoped>
</style>
