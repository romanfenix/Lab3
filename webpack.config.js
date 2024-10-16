// webpack.config.js
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: '[name].bundle.js',
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      title: 'Головна',
      template: path.resolve(__dirname, './src/pages/index.html'),
      filename: 'index.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Розклад',
      template: path.resolve(__dirname, './src/pages/rozklad.html'),
      filename: 'rozklad.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Новини',
      template: path.resolve(__dirname, './src/pages/news.html'),
      filename: 'news.html',
    }),
    new HtmlWebpackPlugin({
      title: 'Фотоальбом',
      template: path.resolve(__dirname, './src/pages/photo.html'),
      filename: 'photo.html',
    }),
    new CopyWebpackPlugin({
      patterns: [
        { from: path.resolve(__dirname, './src/assets/images'), to: 'assets/images' },
      ],
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'], // Добавьте это, если вы используете CSS
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, 'dist'), // Указываем папку для статики
    },
    compress: true,
    port: 80, // Укажите желаемый порт
    historyApiFallback: true, // Это важно для SPA, чтобы маршруты работали корректно
    open: true, // Открывать браузер автоматически
  },
};
