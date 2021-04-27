const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
//const HtmlWebpackPugPlugin = require('html-webpack-pug-plugin');


module.exports = {
    entry: {
        main: path.resolve(__dirname, './src/index.js'),
    },
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: '[name].bundle.js',
    },
    plugins: [
       // new HtmlWebpackPugPlugin(),
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname,'./src/pages/index.html'), // шаблон
            filename: 'index.html', // название выходного файла
        }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname,'./src/pages/news.html'), 
            filename: 'news.html', 
        }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname,'./src/pages/photo.html'), 
            filename: 'photo.html', 
        }),
        new HtmlWebpackPlugin({
            title: 'webpack Boilerplate',
            template: path.resolve(__dirname,'./src/pages/rozklad.html'), 
            filename: 'rozklad.html', 
        }),
    ],
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 3000,
        open: true,
      },     
}