const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const pages = ['module', 'generator', 'async', 'proxy', 'map']
module.exports = {
	entry: (function(pages) {
		let entries = {}
		pages.forEach(page => { entries[`${page}/dist/bundle`] = `./${page}/index.js` })
		return entries
	})(pages), 
	output: {
		path: __dirname,
		filename: '[name].js'
	},
	devtool: 'source-map',
	plugins: pages.map(page => {
		return new HtmlWebpackPlugin({
			chunks: [`${page}/dist/bundle`],
			title: page,
			filename: `${page}/index.html`
		})
	})
}
