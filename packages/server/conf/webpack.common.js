const path = require('path');
const webpack = require('webpack');

const nodeEnv = process.env.NODE_ENV;

module.exports = {
  module: {
    rules: [
      {
        exclude: [path.resolve(__dirname, 'node_modules')],
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(nodeEnv),
      },
    }),
  ],
  output: {
    filename: 'server.js',
    path: path.resolve(__dirname, '../build')
  },
  resolve: {
    extensions: ['.ts', '.js']
  },
  // node: {
  //   console: false,
  //   global: false,
  //   process: false,
  //   Buffer: false,
  //   __filename: false,
  //   __dirname: false,
  // },
  target: 'node'
};