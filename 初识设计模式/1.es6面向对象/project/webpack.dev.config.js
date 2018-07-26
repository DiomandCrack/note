const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/index.js',
  output:{
    path:__dirname,
    filename:'./release/bundle.js'
  },
  module:{
    rules:[{
      //检测js文件
      test:/\.js?$/,
      //排除 不需要检测的文件
      exclude:/(node_modules)/,
      loader:'babel-loader'
    }]
  },
  //插件[]
  plugins:[
    new HtmlWebpackPlugin({
      //打包的js自动注入到模板html中
      template:'./index.html'
    })
  ],
  //开发服务器 热更新
  devServer:{
    contentBase:path.join(__dirname,'./release'), //根目录
    open:true,//自动打开浏览器
    port:9000,//端口号9000
  }
}