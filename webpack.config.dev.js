const path = require('path')

const webpackMerge = require('webpack-merge')

const commonConfig = require('./webpack.config.base.js')

module.exports = function (env) {
  return webpackMerge(commonConfig(env), {
  	devServer: {
	    contentBase: path.resolve(__dirname, './devServer'),
	  }
  })
}
