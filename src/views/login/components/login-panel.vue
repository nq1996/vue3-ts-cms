<template>
  <div class="login-panel">
    <el-form :model="phone" :rules="rules_phone">
      <el-form-item label="手机号" prop="number">
        <el-input v-model="phone.number"></el-input>
      </el-form-item>
      <el-form-item label="验证码" prop="verify">
        <el-row type="flex" align="middle" :gutter="10">
          <el-col :span="20">
            <el-input v-model="phone.verify"></el-input>
          </el-col>
          <el-col :span="4">
            <el-button type="primary">验证码</el-button>
          </el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import { rules_phone } from '../config'
export default defineComponent({
  name: 'Home',
  components: {},
  setup() {
    let phone = reactive({
      number: '',
      verify: ''
    })
    return {
      phone,
      rules_phone
    }
  }
})
</script>

<style lang="less" scoped>
</style>
