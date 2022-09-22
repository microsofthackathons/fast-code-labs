const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const appDir = path.resolve(__dirname, './src');
const outDir = path.resolve(__dirname, './www');

module.exports = function (env, { mode }) {
  const fullyArmedAndOperational = mode === 'production';
  return {
    mode: fullyArmedAndOperational ? 'production' : 'development',
    devtool: fullyArmedAndOperational ? 'source-map' : 'inline-source-map',
    entry: {
      app: path.resolve(appDir, 'app.ts'),
    },
    output: {
      path: outDir,
      publicPath: '/',
      filename: 'bundle.js',
    },
    resolve: {
      extensions: ['.ts', '.js'],
      modules: ['src', 'node_modules'],
    },
    devServer: {
      port: 9000,
      historyApiFallback: true,
      writeToDisk: true,
      open: !process.env.CI,
      lazy: false,
    },
    plugins: [
      new CleanWebpackPlugin(),
      new HtmlWebpackPlugin({
        title: 'Welcome to FAST Code Labs!',
        template: path.resolve(appDir, 'index.html'),
      }),
    ],
    module: {
      rules: [
        {
          test: /\.ts$/i,
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
  };
};
