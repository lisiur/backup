const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require("extract-text-webpack-plugin")
const postcssPlugins = require('./postcss.config.js')

const jsConfig = (env) => ({
  entry: {
    main: './main.js',
  },
  output: {
    path: __dirname,
    filename: 'dist/javascripts/[name].bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
    }, {
      test: /\.vue$/,
      loader: 'vue-loader'
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({ title: 'post-css', template: './src/html/template.html' }),
    new ExtractTextPlugin("dist/styles/[name].css"),
    new webpack.LoaderOptionsPlugin({
      vue: {
        postcss: postcssPlugins,
        autoprefixer: false
      }
    })
  ],
  // resolve: {
  //   alias: {
  //     'vue$': 'vue/dist/vue.esm.js'
  //   }
  // }
})
const cssConfig = (env) => ({
  entry: {
    vvue: './src/styles/all.css'
  },
  output: {
    path: __dirname,
    filename: 'dist/styles/vvue.css'
  },
  devtool: 'source-map',
  module: {
    rules: [{
      test: /\.css$/,
      use: ExtractTextPlugin.extract(['css-loader', 'postcss-loader'])
    }]
  },
  plugins: [
    new ExtractTextPlugin("dist/styles/[name].css"),
  ],
})
module.exports = (env) => {
  return [cssConfig(env), jsConfig(env)]
}