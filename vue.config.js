// vue.config.js
const path = require('path')

function resolve (dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        // 这里配置了components文件的路径别名
        '@': resolve('src'),
        components: resolve('src/components'),
        pages: resolve('src/pages'),
        api: resolve('src/api'),
        stylus: resolve('src/stylus'),
        common: resolve('src/common')
      }
    }
  },
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true
        }
      }
    }
  },
  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'less',
      patterns: [
        // tools
        resolve('./src/style/tools/index.less'),
        // color 工具
        resolve('./src/style/tools/color/colors.less'),
        // 默认主题
        resolve('./src/style/theme/default.less'),
        // 暗色主题 （打包换主题， todo: antd-theme-generator 方案在线换肤）
        // resolve('./src/style/theme/dark.less'),
        // 默认变量
        resolve('./src/style/settings/variable.less')
      ]
    }
  }
}
