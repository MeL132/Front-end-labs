const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
        new HtmlWebpackPugPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'index',
            templates: './src/pages/index.pug', // шаблон
            filename: 'index.html', // название выходного файла
            minify: false
        }),
        new HtmlWebpackPlugin({
            title: 'news',
            template: path.resolve(__dirname,'./src/pages/news.pug'), 
            filename: 'news.html', 
            minify: false
        }),
        new HtmlWebpackPlugin({
            title: 'photo',
            template: path.resolve(__dirname,'./src/pages/photo.pug'), 
            filename: 'photo.html', 
            minify: false
        }),
        new HtmlWebpackPlugin({
            title: 'rozklad',
            template: path.resolve(__dirname,'./src/pages/rozklad.pug'), 
            filename: 'rozklad.html', 
            minify: false
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: true,
      },     
}