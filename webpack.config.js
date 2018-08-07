const { resolve } = require('path');
const webpack = require('../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack/hot/only-dev-server',
    './src/index.js'
  ],
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: [
          'babel-loader'
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      },
      {
        test: /\.(eot|woff|woff2|otf|ttf|svg|png|jpe?g|gif)(\?\S*)?$/,
        use: 'url-loader'
      }
    ]
  },
  devServer: {
    publicPath: "/",
    contentBase: "./public",
    hot: true
  },
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
}