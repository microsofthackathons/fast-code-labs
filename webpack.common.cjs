/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ResolveTypeScriptPlugin = require('resolve-typescript-plugin');

const appDir = path.resolve(__dirname, './src');
const outDir = path.resolve(__dirname, './www');

module.exports = {
  name: 'root',
  entry: {
    app: path.resolve(appDir, 'app.ts'),
  },
  resolve: {
    extensions: ['.ts', '.js'],
    plugins: [new ResolveTypeScriptPlugin()],
  },
  output: {
    path: outDir,
    publicPath: '/',
    clean: true,
  },
  module: {
    rules: [
      {
        test: /.ts$/,
        use: [
          {
            loader: 'ts-loader',
          },
        ],
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jp(e*)g|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              limit: 8000, // Convert images < 8kb to base64 strings
              name: 'images/[hash]-[name].[ext]',
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Welcome to FAST Code Labs!',
      template: path.resolve(appDir, 'index.html'),
    }),
  ],
};
