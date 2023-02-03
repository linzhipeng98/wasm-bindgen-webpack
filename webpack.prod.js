const path = require('path')

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.js',
    clean: true,
  },
  mode: 'production',
  experiments: {
    asyncWebAssembly: true,
  },
}
