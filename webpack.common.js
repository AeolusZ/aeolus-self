const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: {
    app: './src/index.js',
    another: './src/another-module.js',
    // common: [
    //   'lodash'
    // ]
  },
  output: {
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '输出文档'
    }),
  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        common: {
          name: 'common',
          chunks: 'initial',
          priority: 2,
          minSize: 0,       
        },
       vendor: {
         test: /[\\/]node_modules[\\/]/,
         name: 'vendor',
         chunks: 'initial',
         priority: 10,
         minSize: 0
       }
      },
    }
  }
}