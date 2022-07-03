// const path = require('path')
module.exports = {
  // outputDir: './build',
  configureWebpack: {
    resolve: {
      alias: {
        // '@': path.resolve(__dirname, './src')
        components: '@/components'
      }
    }
  }
}
