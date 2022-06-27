## 
yarn add -D @craco/craco
在craco.config.js文件中配置别名
const path = require('path')

module.exports = {
  // webpack 配置
  webpack: {
    // 配置别名
    alias: {
      // 约定：使用 @ 表示 src 文件所在路径
      '@': path.resolve(__dirname, 'src'),
      // 约定：使用 @scss 表示全局 SASS 样式所在路径
      // 在 SASS 中使用
      '@scss': path.resolve(__dirname, 'src/assets/styles')
    }
  }
}
package.json中
// 将 start/build/test 三个命令修改为 craco 方式

"scripts": {
  "start": "craco start",
  "build": "craco build",
  "test": "craco test",
  "eject": "react-scripts eject"
},

在jsconfig.json中配置别名提示
{
  "compilerOptions": {
    "baseUrl": "./",
    "paths": {
      "@/*": ["src/*"],
      "@scss/*": ["src/assets/styles/*"]
    }
  }
}