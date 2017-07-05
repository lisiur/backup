const webpack = require('webpack')
module.exports = {
	entry: {
		'module/dist/bundle': './module/index.js',
		'generator/dist/bundle': './generator/index.js',
	},
	output: {
		path: __dirname,
		filename: '[name].js'
	},
	devtool: 'source-map'
}
