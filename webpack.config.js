//引入一个包
const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
    //入口
    entry: "./src/index.ts",
    //出口
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle1.js'
    },
    mode: 'development', // 设置mode
    //制定 webpack 使用的插件
    module: {
        //加载规则
        rules: [
            {
                //test指定的是 规则生效的文件
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node-modules/
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            title: 'ts-wabpack'
        }),
        new CleanWebpackPlugin()
    ],
    //来设置引用模块
    resolve: {
        extensions: ['.ts', '.js'],//ts 和 js都可以当做模块使用
    }
}