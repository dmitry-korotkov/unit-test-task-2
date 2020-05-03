const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// Node.js модуль для разрешения путей файлов
module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'app.bundle.js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      filename: './index.html',
    }),
  ],
};
