# Dependencias

npm install package-name -o → Instalar una dependencia opcional
Se pueden generar conflictos cuando se tienen paquetes que usan la misma dependencia pero en versiones diferentes. Para evitar esto se puede simular una instalación con npm 


install package-name —dry-run. Con esto se simula la instalación pero sin agregar ningún paquete, si no hay ningún conflicto se procede a instalar de la manera convencional.


npm install package-name@0.15.0 → Instalar la versión especifica de un paquete.


npm install package-name@latest → Instalar la versión mas actualizada de un paquete.


npm install → Instala las dependencias que estén dentro de un package.json.