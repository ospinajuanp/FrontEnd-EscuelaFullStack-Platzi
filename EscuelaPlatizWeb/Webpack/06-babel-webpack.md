# Pasos para iniciar webpack

- mkdir nameProjectWebPack
- cd nameProjectWebPack
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

## usando babel

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