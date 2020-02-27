const { resolve } = require('path');

module.exports = {
  entry: resolve(__dirname, 'src', 'index.js'),
  output: {
    path: resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: resolve(__dirname, 'public'),
    port: 3000
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
        ]
      },
      {
        test: [/\.bmp$/, /\.svg$/, /\.gif$/, /\.jpe?g$/, /\.png$/],
        loader: 'url-loader',
        options: {
          limit: 200,
          name: '[name].[hash:8].[ext]',
          publicPath: 'public/assets'
        },
      },
    ]
  }

}