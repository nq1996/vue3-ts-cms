module.exports = {
  plugins: [
    [
      'import',
      {
        libraryName: "element-plus",
        customStyleName: (name) => {
          // css路径
          return `element-plus/theme-chalk/${name}.css`
        }
      }
    ]
  ],
  presets: [
    "@vue/cli-plugin-babel/preset"
  ]
}