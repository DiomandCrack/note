module.exports = {
    entry:{
        //相对路径
        app:'./app.js'
    },
    output:{
        filename:'./[name].[hash:5].js'
    },
    module:{
        //rulse是个数组
        rules:[
            {
                //用正则匹配文件的后缀
                test:/\.js&/,
                //编译es6
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['preset-env',{
                            targets:{
                                browsers:[
                                    '>1%',
                                    'last 2 versions',
                                ]
                            }
                        }],
                    }
                },
                //排除在外
                exclude:'/node_modules/'
            }
            //babel-perset 编译的规则
        ]
    }
}