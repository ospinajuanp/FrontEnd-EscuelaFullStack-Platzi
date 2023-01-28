# Pasos para iniciar webpack

- mkdir nameProjectWebPack
- cd nameProjectWebPack
- si estamos creando un proyecto desde 0 debemos tener en cuenta lo siguiente
    - tener las siguientes carpetas
        - public
            - index.html
        - src
            - assets
                - fonts
                - img
            - styles
                - main.css
            - templates
                - template.js (aquí ejecutamos un js con inserción de texto en el DOM)
            - utils
                - getData.js (aquí estamos trayendo la data de una api)
- npm init
- code .
- npm install webpack webpack-cli -D
- npx webpack (ejecutamos webpack para que lo compile nuestro desarrollo)
- npx webpack --mode development (este es el modo desarrollo)
- npx webpack --mode production (este es el modo productivo)
- creamos un archivo llamado webpack.config.js con el siguiente contenido
    - const path = require('path');
    - module.exports = {
        - entry: './src/index.js',
        - output: {
            - path: path.resolve(__dirname,'dist'),
            - filename: 'main.js',
        - },
        - resolve:{
            - extensions:['.js'] (aquí colocaremos todas las extensiones que vamos utilizando en nuestro proyecto)
        - }
    - }
- para poder usar nuestro configuración debemos de usar una nueva flag de entrada a nuestro comando
  - npx webpack --mode production --config webpack.config.js
- podemos crear un script en nuestro paquete package.json para hacer mas amigable la ejecución 
    - "scripts": {
        - "build": "webpack --mode production",
    - },
    - npm run build (asi lo ejecutamos)

## usando babel para js en todos los navegadores

- npm install babel-loader @babel/core @babel/preset-env @babel/plugin-transform-runtime -D
- creamos en nuestro proyecto un archivo .babelrc el cual debe tener el formato
    - {
        - "presets": [
            - "@babel/preset-env"
        - ],
        - "plugins": [
            - "@babel/plugin-transform-runtime"
        - ]
    - }
- En nuestro archivo de configuración de webpack necesitamos agregar los module
    - module :{
        - rules: [
            - {
            - test: /\.m?js$/, (Test declara que extensión de archivos aplicara el loader)
            exclude: /node_modules/, (Exclude permite omitir archivos o carpetas especificas)
            - use: {loader: "babel-loader"}, (Use es un arreglo u objeto donde dices que loader aplicaras)
            - }
        - ]
    - },
- Podemos ahora utilizar npm run build y asi generar nuestro webpack usando babel

## usando plugin para html

- npm install html-webpack-plugin -D
- en la parte superior de nuestro webpack.config.js colocamos lo siguiente
    - const HtmlWebpackPlugin = require('html-webpack-plugin')
- y en la parte de abajo después de module colocamos lo siguiente
    - plugins:[
        - new HtmlWebpackPlugin({
            - inject:true,
            - template:'./public/index.html',
            - filename:'./index.html'
        - })
    - ],
- debemos cambiar la estructura en nuestro HTML Eliminando nuestro script src ya que webpack va a generar esa conexión automáticamente
- podemos ahora utilizar npm run build y asi generar nuestro webpack el build del js y también de nuestro html
- ademas podemos crear otro script para ejecutar nuestro webpack en modo development con el fin de debuggear nuestro código
    - "dev": "webpack --mode development --config webpack.config.js" (en nuestro package.json en el apartado de script)
- después de esto ahora podemos ejecutar nuestro build/dev
    - npm run dev

## usando webpack para css y pre-procesadores

### css
- npm install mini-css-extract-plugin css-loader -D
- debemos cambiar la estructura en nuestro HTML Eliminando nuestro link css href ya que webpack va a generar esa conexión automáticamente
- en nuestro index.js vamos a importar nuestro estilos
    - import './styles/main.css'
- en la parte superior de nuestro webpack.config.js colocamos lo siguiente
    - const MiniCssExtractPlugin = require('mini-css-extract-plugin');
- En nuestro archivo de configuración de webpack necesitamos modificar los module
    - module :{
        - rules: [
            - {
                - test: /\.m?js$/,// Test declara que extensión de archivos aplicara el loader
                - exclude: /node_modules/,// Exclude permite omitir archivos o carpetas especificas
                - use: {loader: "babel-loader"},// Use es un arreglo u objeto donde dices que loader aplicaras
            - },
            - {
                - test: /\.css$/i, // Test declara que extensión de archivos aplicara el loader
                - use: [MiniCssExtractPlugin.loader,"css-loader",] // Use es un arreglo u objeto donde dices que loader aplicaras
            - },
        - ]
    - },
- y en la parte de abajo después de module en plugin colocamos lo siguiente
    - plugins:[
        - new HtmlWebpackPlugin({
            - inject:true,
            - template:'./public/index.html', (aquí va el html con el que vamos a trabajar)
            - filename:'./index.html' (el nombre de salida que va tener nuestro html)
        - }),
        - new MiniCssExtractPlugin(), (este es el que usamos para poder transformar el css o pre-procesadores)
    - ],
- después de esto ahora podemos ejecutar nuestro build/dev
    - npm run dev

### pre-procesadores

Voy a estar usando sass pero para otros es equivalente o buscar en google -> loader namePre-procesador

- npm install sass sass-loader -D
- en nuestro index.js vamos a importar nuestro estilos
    - import './styles/vars.scss'
- - En nuestro archivo de configuración de webpack necesitamos modificar los module
    - module :{
        - rules: [
            - {
                - test: /\.m?js$/,// Test declara que extensión de archivos aplicara el loader
                - exclude: /node_modules/,// Exclude permite omitir archivos o carpetas especificas
                - use: {loader: "babel-loader"},// Use es un arreglo u objeto donde dices que loader aplicaras
            - },
            - {
                - test: /\.(css|scss)$/i, // Test declara que extensión de archivos aplicara el loader
                - use: [MiniCssExtractPlugin.loader,"css-loader","sass-loader"] // Use es un arreglo u objeto donde dices que loader aplicaras
            - },
        - ]
    - },
- después de esto ahora podemos ejecutar nuestro build/dev
    - npm run dev

## copia de archivo src a nuestro disc

- npm install copy-webpack-plugin -D
- en la parte superior de nuestro webpack.config.js colocamos lo siguiente
    - const MiniCssExtractPlugin = require('mini-css-extract-plugin');
- y en la parte de abajo después de module en plugin colocamos lo siguiente
    - plugins:[
        - new HtmlWebpackPlugin({
            - inject:true,
            - template:'./public/index.html', (aquí va el html con el que vamos a trabajar)
            - filename:'./index.html' (el nombre de salida que va tener nuestro html)
        - }),
        - new MiniCssExtractPlugin(), (este es el que usamos para poder transformar el css o pre-procesadores)
        - new CopyPlugin({ (este es el que usamos para poder mover archivo/s o carpeta/s)
            - patterns: [
                - {
                    - from: path.resolve(__dirname, "src", "assets/images"), (de donde vamos a mover lo/s archivo/s o carpeta/s)
                    - to: "assets/images" (hacia donde vamos mover lo/s archivo/s o carpeta/s)
                - }
            - ]
        - })
    - ],
- y en nuestro template.js nos toca cambiar el llamado de nuestras img ejemplo
    - de < img src="../src/assets/images/twitter.png" />
    - poner < img src="assets/images/twitter.png" />
- después de esto ahora podemos ejecutar nuestro build/dev
    - npm run dev

## optimizar img

- En nuestro archivo de configuración de webpack necesitamos modificar los output
    - output: {
        - path: path.resolve(__dirname,'dist'),
        - filename: 'main.js',
        - assetModuleFilename: 'assets/images/[hash][ext]',
    - },
- en la parte superior de nuestro webpack.config.js colocamos lo siguiente
    - const CopyPlugin = require('copy-webpack-plugin');
- En nuestro archivo de configuración de webpack necesitamos modificar los module
    - module :{
        - rules: [
            - {
                - test: /\.m?js$/,// Test declara que extensión de archivos aplicara el loader
                - exclude: /node_modules/,// Exclude permite omitir archivos o carpetas especificas
                - use: {loader: "babel-loader"},// Use es un arreglo u objeto donde dices que loader aplicaras
            - },
            - {
                - test: /\.css$/i, // Test declara que extensión de archivos aplicara el loader
                - use: [MiniCssExtractPlugin.loader,"css-loader",] // Use es un arreglo u objeto donde dices que loader aplicaras
            - },
            - {
                - test: /\.png/i, // Test declara que extensión de archivos aplicara el loader
                - type: 'asset/resource' // De esta forma usamos el loader de webpack para las img
            - } // En este caso vamos a usar el loader de webpack para tratar las imágenes 
        - ]
    - },
- ahora en nuestro archivo de template.js debemos importarlos
  - import gitHub from '../assets/images/github.png'
  - import twitter from '../assets/images/twitter.png.png'
  - import instagram from '../assets/images/instagram.png'
- y para trabajarlos seria de la siguiente forma
  - < img src="${gitHub}" />
  - < img src="${twitter}" />
  - < img src="${instagram}" />
- después de esto ahora podemos ejecutar nuestro build/dev
    - npm run dev

## fuentes font-family

- en nuestro archivo main.css 
- eliminamos nuestro import
  - @import "https://fonts.googleapis.com/css?family=Ubuntu:300,400,500";
- vamos agregar lo siguiente
    - @font-face{
        - font-family: 'ubuntu';
        - src: 	url('../assets/fonts/ubuntu-regular.woff2') format('woff2'),
                url('../assets/fonts/ubuntu-regular.woff') format('woff');
        - font-weight: 400;
        - font-style: normal;
    - }
- npm install url-loader file-loader -D
- En nuestro archivo de configuración de webpack necesitamos modificar 
- los output
    - output: {
        - path: path.resolve(__dirname,'dist'),
        - filename: 'main.js',
        - assetModuleFilename: 'assets/images/[hash][ext][query]',
    - },
- los module
    - module :{
        - rules: [
            - {
                - test: /\.m?js$/,// Test declara que extensión de archivos aplicara el loader
                - exclude: /node_modules/,// Exclude permite omitir archivos o carpetas especificas
                - use: {loader: "babel-loader"},// Use es un arreglo u objeto donde dices que loader aplicaras
            - },
            - {
                - test: /\.css$/i, // Test declara que extensión de archivos aplicara el loader
                - use: [MiniCssExtractPlugin.loader,"css-loader",] // Use es un arreglo u objeto donde dices que loader aplicaras
            - },
            - {
                - test: /\.png/i, // Test declara que extensión de archivos aplicara el loader
                - type: 'asset/resource' // De esta forma usamos el loader de webpack para las img
            - }, // En este caso vamos a usar el loader de webpack para tratar las imágenes 
            - {
                - test: /\.(woff|woff2)$/i,
                - type: 'asset/resource',
                - generator: {
                    - filename: "assets/fonts/[hash][ext]",
                - },
            - },
        - ]
    - },
- los plugins
    - plugins:[
        - new HtmlWebpackPlugin({
            - inject:true,
            - template:'./public/index.html', (aquí va el html con el que vamos a trabajar)
            - filename:'./index.html' (el nombre de salida que va tener nuestro html)
        - }),
        - new MiniCssExtractPlugin(), (este es el que usamos para poder transformar el css o pre-procesadores)
        - new CopyPlugin({ (este es el que usamos para poder mover archivo/s o carpeta/s)
            - patterns: [
                - {
                    - from: path.resolve(__dirname, "src", "assets/images"), (de donde vamos a mover lo/s archivo/s o carpeta/s)
                    - to: "assets" (hacia donde vamos mover lo/s archivo/s o carpeta/s)
                - }
            - ]
        - })
    - ],
- después de esto ahora podemos ejecutar nuestro build/dev
    - npm run dev


## Optimizar CSS y JS

- npm install css-minimizer-webpack-plugin terser-webpack-plugin -D
- en la parte superior de nuestro webpack.config.js colocamos lo siguiente
    - const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
    - const TerserPlugin = require('terser-webpack-plugin')
- y en la parte de plugin colocamos lo siguiente
    - plugins:[
        - new HtmlWebpackPlugin({
            - inject:true,
            - template:'./public/index.html', (aquí va el html con el que vamos a trabajar)
            - filename:'./index.html' (el nombre de salida que va tener nuestro html)
        - }),
        - new MiniCssExtractPlugin({
            - filename: 'assets/[name].[contenthash].css'
        - }), (este es el que usamos para poder transformar el css o pre-procesadores)
        - new CopyPlugin({ (este es el que usamos para poder mover archivo/s o carpeta/s)
            - patterns: [
                - {
                    - from: path.resolve(__dirname, "src", "assets/images"), (de donde vamos a mover lo/s archivo/s o carpeta/s)
                    - to: "assets/images" (hacia donde vamos mover lo/s archivo/s o carpeta/s)
                - }
            - ]
        - })
    - ],
- y en la parte de abajo después de plugins colocamos lo siguiente
    - optimization:{
        - minimize : true,
        - minimizer:[
            - new CssMinimizerPlugin(),
            - new TerserPlugin()
        - ]
    - },
- después de esto ahora podemos ejecutar nuestro build/dev
    - npm run dev

## alias webpack

- y en la parte de resolve modificamos lo siguiente
    - resolve:{
        - extensions:['.js'],
        - alias:{
            - '@utils':path.resolve(__dirname,'src/utils/'),
            - '@template':path.resolve(__dirname,'src/templates/'),
            - '@styles':path.resolve(__dirname,'src/styles/'),
            - '@images':path.resolve(__dirname,'src/assets/images/'),
        - },
    - },
- y en la parte de index.js modificamos lo siguiente
    - import Template from '@templates/Template.js';
    - import '@styles/main.css'
    - import '@styles/vars.scss'
- y en la parte de templates.js modificamos lo siguiente
    - import getData from '@utils/getData.js';
    - import gitHub from '@images/github.png'
    - import twitter from '@images/twitter.png'
    - import instagram from '@images/instagram.png'
- después de esto ahora podemos ejecutar nuestro build/dev
    - npm run dev

## variables de entorno webpack

- npm install dotenv-webpack -D 
- creamos 2 archivos en nuestro proyecto
    - .env  (variables reales de nuestro proyecto)
        - API = 'https://randomuser.me/api/';
    - .env-example  (variables de ejemplo para el proyecto)
        - API = '';
- en la parte superior de nuestro webpack.config.js colocamos lo siguiente
    - const DotEnv = require('dotenv-webpack');
- y en la parte de plugin colocamos lo siguiente
    - plugins:[
        - new HtmlWebpackPlugin({
            - inject:true,
            - template:'./public/index.html', (aquí va el html con el que vamos a trabajar)
            - filename:'./index.html' (el nombre de salida que va tener nuestro html)
        - }),
        - new MiniCssExtractPlugin({
            - filename: 'assets/[name].[contenthash].css'
        - }), (este es el que usamos para poder transformar el css o pre-procesadores)
        - new CopyPlugin({ (este es el que usamos para poder mover archivo/s o carpeta/s)
            - patterns: [
                - {
                    - from: path.resolve(__dirname, "src", "assets/images"), (de donde vamos a mover lo/s archivo/s o carpeta/s)
                    - to: "assets/images" (hacia donde vamos mover lo/s archivo/s o carpeta/s)
                - }
            - ]
        - })
        - new DotEnv(),
    - ],
- y en nuestro archivo getData.js (donde vamos a usar la variable de entorno) colocamos lo siguiente
    - const API = process.env.API
- después de esto ahora podemos ejecutar nuestro build/dev
    - npm run build

## webpack modo desarrollo

- creamos un archivo llamado webpack.config.dev.js (el cual copiamos todo lo de archivo sin dev y eliminamos el apartado de optimización)
- después del output en nuestro archivo webpack.config.dev.js ponemos 
    - mode:'development',
- y en nuestro package.js en los script cambiamos el dev por lo siguiente
    - "dev": "webpack --config webpack.config.dev.js"
- después de esto ahora podemos ejecutar nuestro dev
    - npm run dev