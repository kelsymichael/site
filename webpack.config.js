const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const css = require('!raw!stylus!./file.styl');


module.exports = {
  entry: './app/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js'
  },
  module: {
    rules: [
      { test: /\.(js)$/, use: 'babel-loader' },
      // { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]},
      { test: /\.styl$/, use: [ 'style-loader', 'css-loader', { loader: 'stylus-loader'},],}
    ]
  },
  plugins: [new HtmlWebpackPlugin({
    template: 'app/index.html'
  })]
}