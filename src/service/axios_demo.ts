import axios from 'axios'

// 测试get请求
// axios.get('http://123.207.32.32:8000/home/multidata').then(res=>{
//   console.log(res)
// })



// axios配置项 全局配置
axios.defaults.baseURL = 'http://rap2api.taobao.org/app/mock/304355'
axios.defaults.timeout = 10000
// axios.post('/role/lists').then(res=>{
//   console.log(res.data)
// })
// 单独配置一个接口
// axios.get('',{
//   params:{

//   },
//   headers: {

//   },
//   timeout: 10000
// })


axios.all([
  axios.get('/article/list'),
  axios.post('/role/lists')
]).then(res =>{
  console.log(res)
  
})
// 参数两个一个为请求成攻的函数,另一个请求失败
axios.interceptors.request.use((config)=>{
  return config
},(err)=>{
  console.log(err)
  return err
})
axios.interceptors.response.use((data)=>{
  return data
},(err) => {
  console.log(err)
  return err
})


