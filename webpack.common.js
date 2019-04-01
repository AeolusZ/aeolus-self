const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: {
    app: './src/index.js',
    another: './src/another-module.js'
  },
  output: {
    filename: '[name].bundle.js',
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
        chunks: 'async',
        minSize: '30000',
        maxSize: '0',
        minChunks: '1',
        maxAsyncRequests: '5',
        maxInitialRequests: '3',
        automaticNameDelimiter: '~',
        name: false,
        vendors: {
          chunks: 'initial',
          maxInitialRequests: 5,
          minSize: 0,
          name: 'common'
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        },
      }
    }
  }
}