const path = require('path')
const UglifyPlugin = require('uglifyjs-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
module.exports = {
  entry:'./src/index.js',

  output:{
    path:path.resolve(__dirname,'dist'),
    filename:'bundle.[hash].js'
  },

  module:{
    rules:[
      {
        test:/\.jsx?/,
        include:[
          path.resolve(__dirname,'src')
        ],
        use:'babel-loader'
      },
      {
        test:/\.css$/,
        use:[
          MiniCssExtractPlugin.loader,
          "css-loader"
        ]
      },
    ]
  },

  resolve:{
    modules:[
      "node_modules",
      path.resolve(__dirname,'src')
    ],
    alias:{
      utils$:path.resolve(__dirname,'src/utils')
    },
    extensions:[".wasm",".mjs",".js",".json","jsx"]
  },

  plugins:[
    new UglifyPlugin(),
    new HtmlWebpackPlugin({
      filename:'index.html',
      template:'assets/index.html'
    }),
    new MiniCssExtractPlugin({
      filename:"index.[hash].css",
      chunkFilename:"[id].css"
    })
  ],
}