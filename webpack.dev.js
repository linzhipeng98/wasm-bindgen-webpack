const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin()],
  mode: 'development',
  experiments: {
    asyncWebAssembly: true,
  },
}
