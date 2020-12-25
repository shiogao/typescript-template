const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const outdir = path.resolve(__dirname, "dist")

module.exports = {
  entry: './src/index.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.ts', '.js' ],
  },
  output: {
    filename: 'index.js',
    path: outdir,
  },
  devServer: {
    contentBase: outdir
  },
  plugins: [new HtmlWebpackPlugin()]
};