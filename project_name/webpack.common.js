const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { GenerateSW } = require('workbox-webpack-plugin');
const WebpackPwaManifest = require('webpack-pwa-manifest');

module.exports = {
  entry: path.resolve(__dirname, 'index.jsx'),
  output: {
    path: path.resolve(__dirname, 'bundle'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css'],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
    }),
    new GenerateSW({
      swDest: 'sw.js',
      clientsClaim: true,
      skipWaiting: true,
    }),
    new WebpackPwaManifest({
      name: 'React App', // personalize this properties
      short_name: 'React App',
      description: 'My awesome React App',
      background_color: '#ffffff',
      theme_color: '#000000',
      orientation: 'portrait',
      start_url: '.',
      display: 'standalone',
      icons: [
        {
          src: path.resolve('./favicon.ico'), // path to app icon
          sizes: [96, 128, 192, 256, 384, 512],
        },
      ],
    }),
  ],
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
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loader: 'file-loader',
      },
    ],
  },
};
