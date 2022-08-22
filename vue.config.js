// const path = require('path')
module.exports = {
  // outputDir: './build',
  publicPath: './',
  devServer: {
    proxy: {
      '^/api': {
        target: 'http://152.136.185.210:4000',
        pathRewrite: {
          '^/api': ''
        },
        changeOrigin: true
      }
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        // '@': path.resolve(__dirname, './src')
        components: '@/components'
      }
    }
  }
}
