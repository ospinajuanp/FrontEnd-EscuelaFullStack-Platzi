# webpack react
&nbsp;
&nbsp;
### TERMINAL
&nbsp;
- Abrimos nuestra terminal
- cd Projects (en mi caso tengo una carpeta Projects para mis proyectos con git)
- mkdir webpack-react-platzi (yo al nombre de la carpeta le creo el mismo de mi repositorio CREAR AQUI)
- cd webpack-react-platzi
- code . (ya que mi terminal abre vscode con este comando)
&nbsp;
### VSCODE
&nbsp;
- creo 2 archivos -> README,md Y ,gitignore (las comas representan un punto)
- README,md -> pongo una pequeña descripcion del proyecto o simplemente el nombre del mismo
- ,gitignore -> en un principio solamente coloco -> node_modules/
&nbsp;
### TERMINAL
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
    - import ReactDOM from "react"; (importamos el render de react)
    - import App from './components/App.jsx'
    - ReactDOM.render(<App/>, document.getElementById('app'))
- Creamos la carpeta src/components
- Creamos el archivo src/components/App.jsx contiene el siguiente código
    - import React from "react";
    - const App = () => {
        - < h1>Hello React!</>
    - }
    - export default App
- Creamos la carpeta public
- Creamos el archivo public/index.html (creamos la estructura inicial del mismo)
- Dentro de nuestro html en el body debemos poner 
    - < div id="app"></>