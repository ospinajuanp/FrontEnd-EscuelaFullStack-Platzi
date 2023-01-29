# webpack react
&nbsp;
&nbsp;
## TERMINAL
&nbsp;
- Abrimos nuestra terminal
- cd Projects (en mi caso tengo una carpeta Projects para mis proyectos con git)
- mkdir webpack-react-platzi (yo al nombre de la carpeta le creo el mismo de mi repositorio CREAR AQUI)
- cd webpack-react-platzi
- code . (ya que mi terminal abre vscode con este comando)
&nbsp;
## VSCODE
&nbsp;
- creo 2 archivos -> README,md Y ,gitignore (las comas representan un punto)
- README,md -> pongo una pequeña descripcion del proyecto o simplemente el nombre del mismo
- ,gitignore -> en un principio solamente coloco -> node_modules/
&nbsp;
## TERMINAL
&nbsp;
- git init (inicializamos git)
- git add . (agregamos todos los archivos)
- git commit -m “First commit” (enviamos todos los archivos)
- git branch -M main (cambiamos master por main)
- git remote add origin URL (la url es la que te entrega el repositorio para clonar por ssh)
- git push -u origin main (Enviamos todos los cambios al nuestro repo de github)
&nbsp;
&nbsp;
## Requerimientos adicionales
&nbsp;
&nbsp;
&nbsp;
## TERMINAL
- npm init -y (Creamos nuestro proyecto npm e inicialiamos con configuracion default)
- npm react react-dom -S (instalamos la dependencia y la ponemos como requerida)
&nbsp;
## VScode
&nbsp;
- Creamos la carpeta src
- Creamos el archivo src/index.js con el siguiente código
    - import React from "react"; (importamos react)
    - import ReactDOM from "react-dom"; (importamos el render de react)
    - import App from './components/App.jsx'
    - ReactDOM.render(<App/>, document.getElementById('app'))
- Creamos la carpeta src/components
- Creamos el archivo src/components/App.jsx contiene el siguiente código
    - import React from "react";
    - const App = () => < h1>Hello React!!!</>
    - export default App
- Creamos la carpeta public
- Creamos el archivo public/index.html (creamos la estructura inicial del mismo)
- Dentro de nuestro html en el body debemos poner 
    - < div id="app"></>
&nbsp;
## TERMINAL
&nbsp;
- npm install @babel/core @babel/preset-env @babel/preset-react babel-loader -D
- npm install webpack webpack-cli webpack-dev-server -D
&nbsp;
## VScode
&nbsp;
- creamos en nuestro proyecto un archivo .babelrc el cual debe tener el formato
    - {
        - "presets": [
            - "@babel/preset-env",
            - "@babel/preset-react"
        - ]
    - }
- creamos un archivo llamado webpack.config.js con el siguiente contenido
    - const path = require('path');
    - module.exports = {
        - entry: './src/index.js',
        - output: {
            - path: path.resolve(__dirname,'dist'), (el path de salida carpeta dist-distribution)
            - filename: 'main.js', (nombre del archivo resultante)
        - },
        
        - resolve:{
            - extensions:['.js','.jsx'] (aquí colocaremos todas las extensiones que vamos utilizando en nuestro proyecto)
        module :{
            - rules: [
                - {
                - test: /\.(m?js|jsx)$/, (Test declara que extensión de archivos aplicara el loader)
                - exclude: /node_modules/, (Exclude permite omitir archivos o carpetas especificas)
                - use: {loader: "babel-loader"}, (Use es un arreglo u objeto donde dices que loader aplicaras)
                - }
            - ]
        - },
        - devServer: { // configuración para el server
    		- static: path.join(__dirname, 'dist'), // ruta de nuestro dist
            - compress: true, // si deseamos comprimir
    		- historyApiFallback: true, // si queremos tener un historial
    		- port: 3006, // el puerto que deseamos utilizar
    		- open: true, // para abrir nuestro navegar automáticamente 
        - }
    - }
&nbsp;
## TERMINAL
&nbsp;
- npm install html-loader html-webpack-plugin -D
&nbsp;
## VSCODE
&nbsp;
- en la parte superior de nuestro webpack.config.js colocamos lo siguiente
    - const HtmlWebpackPlugin = require('html-webpack-plugin')
- en module vamos a cargar el loader para html
        - module :{
            - rules: [
                - {
                - test: /\.(m?js|jsx)$/, (Test declara que extensión de archivos aplicara el loader)
                - exclude: /node_modules/, (Exclude permite omitir archivos o carpetas especificas)
                - use: {loader: "babel-loader"}, (Use es un arreglo u objeto donde dices que loader aplicaras)
                - },
                - {
                - test: /\.html$/, (Test declara que extensión de archivos aplicara el loader)
                - use: {loader: "html-loader"}, (Use es un arreglo u objeto donde dices que loader aplicaras)
                - }
            - ]
        - },
- y en la parte de abajo después de module colocamos lo siguiente
    - plugins:[
        - new HtmlWebpackPlugin({
            - template:'./public/index.html',
            - filename:'./index.html'
        - })
    - ],
- podemos crear un script en nuestro paquete package.json para hacer mas amigable la ejecución 
    - "scripts": {
        - "start": "webpack serve",
        - "build": "webpack --mode production",
    - },
- npm run start (asi lo ejecutamos)
&nbsp;
## TERMINAL
&nbsp;
- npm install mini-css-extract-plugin css-loader style-loader sass sass-loader -D
&nbsp;
## VSCODE
&nbsp;
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
              - test: /\.html$/, (Test declara que extensión de archivos aplicara el loader)
              - use: {loader: "html-loader"}, (Use es un arreglo u objeto donde dices que loader aplicaras)
              - }
            - {
                - test: /\.s[ac]ss$/i, // Test declara que extensión de archivos aplicara el loader
                - use: ["style-loader","css-loader","sass-loader"] // Use es un arreglo u objeto donde dices que loader aplicaras
            - },
        - ]
    - },
- y en la parte de abajo después de module en plugin colocamos lo siguiente
    - plugins:[
        - new HtmlWebpackPlugin({
            - template:'./public/index.html', (aquí va el html con el que vamos a trabajar)
            - filename:'./index.html' (el nombre de salida que va tener nuestro html)
        - }),
        - new MiniCssExtractPlugin({
        - filename:'[name].css'
        - }),
    - ],
- Creamos la carpeta style
- Creamos el archivo style/global.scss contiene el siguiente código
    - $base-color: #c6538c;
    - $color: rgb(black,0.88);
    - body{
        - background:$base-color;
        - color:$color;
    - }
- agregamos en nuestro archivo src/index.js con el siguiente código
    - import './style/global.scss'
&nbsp;
## TERMINAL
&nbsp;
- npm run start (asi lo ejecutamos para validar)
### desarrollo
- creamos un archivo llamado webpack.config.dev.js 
- después del output en nuestro archivo webpack.config.dev.js ponemos 
    - mode:'development',
- en nuestro archivo webpack.config.js podemos eliminar el devServer ya que ese es solo para modo desarrollo
- y en nuestro package.js en los script cambiamos el dev por lo siguiente
    - "dev": "webpack --config webpack.config.dev.js"
### optimizar
- npm install css-minimizer-webpack-plugin terser-webpack-plugin clean-webpack-plugin -D
- en la parte superior de nuestro webpack.config.js colocamos lo siguiente
    - const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
    - const TerserPlugin = require('terser-webpack-plugin')
    - const { CleanWebpackPlugin } = require('clean-webpack-plugin');
- en nuestro output queda de la siguiente forma
    - output: {
        - path: path.resolve(__dirname,'dist'), (el path de salida carpeta dist-distribution)
        - filename: 'main.js', (nombre del archivo resultante)
        - publicPath: "/", (el path de nuestro carpeta raíz)
    - },
- después del output en nuestro archivo webpack.config.js ponemos 
    - mode:'production',
- y en la parte de resolve modificamos lo siguiente
    - resolve:{
        - extensions:['.js','.jsx'] (aquí colocaremos todas las extensiones que vamos utilizando en nuestro proyecto)
        - alias:{
            - '@components':path.resolve(__dirname,'src/components/'),
            - '@style':path.resolve(__dirname,'src/style/'),
        - },
    - },
- y en la parte de abajo de plugin queda lo siguiente
    - plugins:[
        - new HtmlWebpackPlugin({
            - template:'./public/index.html', (aquí va el html con el que vamos a trabajar)
            - filename:'./index.html' (el nombre de salida que va tener nuestro html)
        - }),
        - new MiniCssExtractPlugin({
            - filename: '[name].css'
        - }), (este es el que usamos para poder transformar el css o pre-procesadores)
        - new CleanWebpackPlugin(), // agregamos este plugin para limpiar archivos
    - ],
- y en la parte de abajo después de plugins colocamos lo siguiente
    - optimization:{
        - minimize : true,
        - minimizer:[
            - new CssMinimizerPlugin(),
            - new TerserPlugin()
        - ]
    - },
- en nuestro package.js en scripts queda asi
    - "scripts": {
        - "start": "webpack serve --config webpack.config.dev.js"
        - "build": "webpack --config webpack.config.js",
    - },
- npm run start (asi lo ejecutamos)
&nbsp;
### netlify
&nbsp;
- en netlify importamos con github 
- seleccionamos nuestro proyecto 
- seleccionamos rama main (normalmente va ser main/deploy/devops)
- build command
    - npm run build
- publish directory
    - dist
- deploy (en netlify)
- después de deployed termine nos vamos a la opción 
- domain management
    - domains
        - options
            - Edit site name
            - ospinajuanp-webpack-react-platzi (ejemplo, esto sera según el proyecto y es la opción gratuita)