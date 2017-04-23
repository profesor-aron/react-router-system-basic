const webpack = require('webpack')

const webpackMerge = require('webpack-merge')

const commonConfig = require('./webpack.config.base.js')

module.exports = function (env) {
  return webpackMerge(commonConfig(env), {
    devtool: 'source-map',
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          sequences: true,
          properties: true,
          dead_code: true,
          drop_debugger: true,
          drop_console: true,
          conditionals: true,
          comparisons: true,
          evaluate: true,
          booleans: true,
          loops: true,
          unused: true,
          if_return: true,
          join_vars: true,
          warnings: false,
          screw_ie8: true
        },
        sourceMap: true
      }),
      new webpack.optimize.OccurrenceOrderPlugin()
    ]
  })
}
