const webpack = require('webpack');
const path = require('path');
module.exports = {
    entry:{
        'pageA':'./pageA',
        'vendor':['lodash']
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].[hash:8].js',
        chunkFilename:'[name].chunk.js'
    },
    optimization:{
        splitChunks:{
            name:'chunks',
            minChunks:Infinity,
        }
    }
}