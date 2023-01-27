const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js',
    },
    resolve:{
        extensions:['.js']
    },
    module :{
        rules: [
            {
                test: /\.m?js$/,// Test declara que extensión de archivos aplicara el loader
                exclude: /node_modules/,// Exclude permite omitir archivos o carpetas especificas
                use: {loader: "babel-loader"},// Use es un arreglo u objeto donde dices que loader aplicaras
            },
            {
                test: /\.(css|scss)$/i, // Test declara que extensión de archivos aplicara el loader
                use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"] // Use es un arreglo u objeto donde dices que loader aplicaras
            }, // En este caso vamos a usar el loader de mini-css-extract-plugin para tratar las css 
            {
                test: /\.png/i, // Test declara que extensión de archivos aplicara el loader
                type: 'asset/resource' // De esta forma usamos el loader de webpack para las img
            } // En este caso vamos a usar el loader de webpack para tratar las imágenes 
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            inject:true,
            template:'./public/index.html',
            filename:'./index.html'
        }),
        new MiniCssExtractPlugin(),
        new CopyPlugin({
            patterns: [
                {
                    from: path.resolve(__dirname, "src", "assets/images"),
                    to: "assets/images"
                }
            ]
        })
    ],
}