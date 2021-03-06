const path = require('path');
const htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    index : './src/scripts/index.js',
    prompt : './src/scripts/prompt.js',
    list : './src/scripts/list.js',
  },
  mode: 'development',
  output: {
      filename: '[name].bundle.js',
      path: path.resolve(__dirname, 'dist'), 
      clean: true,
  },
  plugins: [
    new htmlWebpackPlugin({
      title: 'To-Do Checklist',
      template:'./src/index.html',
      hash:true,
      inject: 'body',
    }),
  ],
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(png|jpg|jpeg|svg|ico|gif|ttf|woff|woff2|eot|otf)$/i,
        type: 'asset/resource',
      }
    ],
  },
};