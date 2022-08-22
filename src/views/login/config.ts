  // 账号验证规则
  export const rules = {
    username: [
      {
        required: true,
        message: '请输入用户名',
        trigger: 'blur'
      },
      {
        min: 6,
        max: 9,
        message: '请输入6-9位字符',
        trigger: 'blur'
      }
    ],
    password: [
      {
        required: true,
        message: '请输入密码',
        trigger: 'blur'
      },
      {
        pattern: /^[a-z0-9]{9,}/,
        message: '密码格式为大于9位的数字或字母',
        trigger: 'blur'
      }
    ]
  }
  // 手机验证规则
  export const rules_phone = {
    number: [
      {
        required: true,
        message: '请输入手机号',
        trigger: 'blur'
      },
      {
       pattern: /^1[0-9]{10}/,
        message: '请输入正确的手机号',
        trigger: 'blur'
      }
    ],
    verify: [
      {
        required: true,
        message: '请输入验证码',
        trigger: 'blur'
      }
    ]
  }
