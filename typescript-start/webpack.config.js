const webpack = require('webpack')
const path = require('path')
const resolvePath = (...paths) => path.resolve(__dirname, ...paths)

function config(_, argv) {
  const PROD_MODE = argv.mode === 'production'
  /**
   * @type {webpack.Configuration}
   */
  const config = {
    entry: './src/index.ts',
    output: {
      path: resolvePath('dist'),
      filename: 'output.js'
    },
    devtool: 'inline-source-map',
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          use: 'ts-loader',
          exclude: /node_modules/
        }
      ]
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js']
    },
    devServer: {
      contentBase: resolvePath('./dist'),
      publicPath: resolvePath('./dist'),
      port: 9001,
    }
  }
  return config
}

module.exports = config