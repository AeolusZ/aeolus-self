const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'webpack-numbers.js',
    path: path.resolve(__dirname, 'dist'),
    library: 'webpackNumbers',
    libraryTarget: 'umd'
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '输出文档'
    }),
  ],
  resolve: {
    extensions: ['.','.js','.jsx','.styl']
  },
  externals: {
    lodash: {
      commonjs: 'lodash',
      commonjs2: 'lodash',
      amd: 'lodash',
      root: '_'
    }
  }
}