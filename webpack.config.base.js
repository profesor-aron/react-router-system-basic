const path = require('path')

const webpack = require('webpack')

const CleanWebpackPlugin = require('clean-webpack-plugin')

var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = function (env) {

	const NODE_ENV = JSON.stringify(env)

	return {
		context: path.resolve(__dirname, './src'),
		entry: './app/index',
		output: {
		  filename: 'App.nocache.js',
		  path: path.resolve(__dirname, './dist/js'),
	    publicPath: 'js'
		},
	  plugins: [
	    new webpack.DefinePlugin({
	      'process.env': {
	        'NODE_ENV': NODE_ENV
	      }
	    }),
	    new CleanWebpackPlugin(['dist']),
	    new HtmlWebpackPlugin({
	      filename: '../index.html',
	      template: './app/index.html'
	    })
	  ],
	  resolveLoader: {
	    moduleExtensions: ['-loader']
	  },
    module: {
      loaders: [
        {
          test: /\.jsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
          query: {
            presets: [
              'es2015',
              'react'
            ]
          }
        }
      ]
    }	  
	}

}
