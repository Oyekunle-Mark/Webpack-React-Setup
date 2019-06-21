const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  plugins: [
    // add plugins here
  ],
  devServer: {
    publicPath: path.resolve(__dirname, '/bundle/'),
    historyApiFallback: true,
    port: 9000,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },
};
