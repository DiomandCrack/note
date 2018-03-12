module.exports = {
    entry:{app:'./app.js'},
    output:{
        filename:'[name].[hash:5].js'
    },
    module:{
        //rulse是个数组
        rules:[
            {
                //用正则匹配文件的后缀
                test:/\.js&/,
                //编译es6
                use:'babel-loader',
                //排除在外
                exclude:'/node_modules/'
            }
            //babel-perset 编译的规则
        ]
    }
}