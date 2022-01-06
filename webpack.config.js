//引入一个包
const path = require('path');

const HTMLWebpackPlugin = require('html-webpack-plugin');

const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  //入口
  entry: path.resolve(__dirname, "src/index.ts"),
  //出口
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
    //打包函数不用箭头函数 兼容IE
    environment: {
        arrowFunction: false,
        const: false,//不允许 const
    }
  },
  mode: "development", // 设置mode
  devServer: {
    // host: "localhost",
    port: 8080,
  },
  //制定 webpack 使用的插件
  module: {
    //加载规则
    rules: [
      {
        //test指定的是 规则生效的文件
        test: /\.ts$/,
        exclude: /node-modules/,
        use: [
          {
            //配置babel
            loader: "babel-loader",
            options: {
              //设置预定义的环境
              presets: [
                [
                  "@babel/preset-env",
                    {
                      "targets": {
                          "chrome": "58",
                          "ie": "10"
                      },
                      "corejs": "3",
                      "useBuiltIns": "usage"
                    }
                ],
              ],
            },
          },
          "ts-loader",
        ],
      },
      {
        test: /\.less$/,
        use: [
          "style-loader",
          "css-loader",
          {
            loader: "postcss-loader",
            options: {
              postcssOptions: {
                plugins: [
                  [
                    "postcss-preset-env",
                    {
                      browsers: "last 2 versions",
                    },
                  ],
                ],
              },
            },
          },
          "less-loader",
        ],
      },
    ],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "ts-wabpack",
      template: "src/index.html",
    }),
    new CleanWebpackPlugin(),
  ],
  //来设置引用模块
  resolve: {
    extensions: [".ts", ".js"], //ts 和 js都可以当做模块使用
  },
};