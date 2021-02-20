//引入一个包
const path = require('path');
//引入 html 插件
const HTMLWebpackPlugin = require('html-webpack-plugin');
//引入 clean 插件
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

//webpack 中的所有的配置信息都应该写在module.exports中
module.exports = {
    //指定入口文件
    entry: "./src/index.ts",

    //指定打包文件所在目录
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        environment : {
            arrowFunction: false
        }
    },

    //指定 webpack 打包时要使用模块
    module: {
        //指定加载的规则
        rules: [
            {
                //test指定的是规则生效的文件
                test: /\.ts$/,
                //要是用的loader
                use: [
                    //配置babel
                    {
                        //指定加载器
                        loader: 'babel-loader',
                        //设置babel
                        options: {
                            //设置预定义的环境
                            presets: [
                                [
                                    //指定环境的插件
                                    "@babel/preset-env",
                                    //配置信息
                                    {
                                        //要兼容的目标服务器
                                        targets: {
                                            "chrome": "88",
                                            "ie": "11"
                                        },
                                        //指定 corejs 的版本
                                        "corejs": "3",
                                        //使用corejs的方式 “usage” 表示按需加载
                                        "useBuiltIns": "usage"
                                    }
                                ]
                            ]
                        }
                    },
                    'ts-loader'
                ],
                //要排除的文件
                exclude: /node-modules/
            }
        ]
    },

    //配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            template: "./src/index.html"
        }),
    ],

    //用来设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}