<template>
  <div class="app">
    <img src="./assets/logo.png" />
    <router-view></router-view>
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  components: {}
})
</script>

<style lang="less">
.app {
  height: 100%;
  img {
    display: block;
    margin: auto;
  }
}
</style>
