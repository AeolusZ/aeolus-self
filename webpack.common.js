const path = require('path')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {test: /\.css$/, use: ['style-loader', 'css-loader']},
      {test: /\.(png|svg|jpg|gif)$/, use: ['file-loader']},
      {test: /\.(woff|woff2|eot|ttf|otf)$/, use: ['file-loader']},
      {test: /\.(csv|tsv)$/, use: ['csv-loader']},
      {test: /\.xml$/, use: ['xml-loader']},
      {test: require.resolve('./src/index'),use: 'imports-loader?this=>window'},
      {test: require.resolve('./src/globals'),use: 'exports-loader?file,parse=helpers.parse'}
    ]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: '输出文档'
    }),
    new webpack.ProvidePlugin({
      _: 'lodash',
      join: ['lodash', 'join']
    })
  ], 
}