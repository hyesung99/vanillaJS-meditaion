// path는 운영체제별로 경로 구분자가 달라 생기는 문제를 해결
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output:{
    filename: 'bundle.js',
    // __dirname : file명을 제외한 현재 절대 경로
    // resolve는 인자의 오른쪽 부터 탐색하여 절대 경로 ('/') 만나면 출력
    // local에서 c:\Users\4538a\OneDrive\바탕 화면\zum\dist가 됨
    // '/' or '\' 운영체제에 따라 path가 알아서 해석
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: [
          {
            loader: "babel-loader",
            options: {
                presets: ["@babel/preset-env"],
            },
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/, // .css 확장자로 끝나는 모든 파일
        use: ["style-loader","css-loader"], // css-loader를 적용한다 
      }
    ],
  },
  
  plugins: [new HtmlWebpackPlugin({
    template: "./index.html"
  })],
  devServer: {
    static: {
      directory: path.resolve(__dirname, 'dist')
    },
    port: 3000
  }
}