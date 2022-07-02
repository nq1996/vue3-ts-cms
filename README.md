# git 提交验证

自动配置命令
npx husky -init && npm install
会生成一个.husky 文件夹,在 pre-commit 里面输入 npm run lint 就可以

提交信息的规范化
npm install commitizen -D
