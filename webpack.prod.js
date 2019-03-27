const merge = require('webpack-merge')
const common = require('./webpack.common')
const UglifyJDPlugin = require('uglifyjs-webpack-plugin')
module.exports = merge(common, {
  devtool: 'source-map',
  plugins: [
    new UglifyJDPlugin({
      sourceMap: true
    })
  ]
})
