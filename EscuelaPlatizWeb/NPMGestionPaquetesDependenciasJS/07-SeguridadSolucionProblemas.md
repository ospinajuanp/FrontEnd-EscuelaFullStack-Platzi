# Seguridad y solucion de problemas

npm audit --> Audita las dependencias que tenemos instaladas en busca de vulnerabilidades.

npm audit fix --> Audita e intenta arreglar las vulnerabilidades de nuestras dependencias.

npm audit --json --> Muestra los resultados de la auditoría a manera más profunda en formato json.

npm audit fix --force --> Corrige los problemas encontrados en las librerías instalando otras dependencias por debajo si es necesario.

Es posible que las vulnerabilidades que se nos queden es solamente por que falta instalar las ultimas versiones de nuestra nameDependencia.