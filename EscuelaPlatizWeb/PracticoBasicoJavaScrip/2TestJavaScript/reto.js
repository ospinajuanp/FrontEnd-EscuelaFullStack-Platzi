Test Javascript Platzi 🚀
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve?
Es un caracter/palabra que representa un elemento que sirve para almacenar y/o hacer referencia de un valor

¿Cuál es la diferencia entre declarar e inicializar una variable?
Declaracion es para indicarle la creacion de una variable con un tipo de dato (CONST - LET - VAR)
Inicializar es el valor asignado que va tener la variable

¿Cuál es la diferencia entre sumar números y concatenar strings?
Sumar numero es la operacion matematica de la adicion
Concatenar string es unir dos string

¿Cuál operador me permite sumar o concatenar?
El signo de suma (+)


2️⃣ Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
Nombre, Apellido, Nombre de usuario en Platzi, Edad, Correo electrónico, Mayor de edad, Dinero ahorrado, Deudas
Nombre                           name - string
Apellido                         lasName - string
Nombre de usuario en Platzi      nickname - string
Edad                             age - number
Correo electrónico               email - string
Mayor de edad                    ageLegal - string
Dinero ahorrado                  savedMoney - number(double)
Deudas                           debts - number(double)

3️⃣ Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.

```
let name; 
let lasName; 
let nickname; 
let age; 
let email; 
let ageLegal; 
let savedMoney; 
let debts; 
```


4️⃣ Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)

```
let fullName = name + ' ' + lastName;
let realMoney = savedMoney - debts;
```


Funciones
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
Es un bloque de codigo que sirve para realizar una seria de operaciones generadas por nosotros

¿Cuándo me sirve usar una función en mi código?
Cuando la operacion/es se repite en diferentes puntos de mi desarrollo

¿Cuál es la diferencia entre parámetros y argumentos de una función?
El parametros es la variable que esta dentro de la funcion y esta esperando siendo asignada cuando se llama/ejecuta la funcion
Argunmento/s es el valor que ponemos en la llamada/ejeucion de la funcion

2️⃣ Convierte el siguiente código en una función, pero, cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:
```
const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";
function preferNickname (completeName,nickname){
    console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");    
}
preferNickname(completeName,nickname);
```

Condicionales
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
Es una instruccion operacional que da como resultado true o false y segun este realiza un proble de codigo

¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
if/else/elseif/switchcase, ==, ===, <, >, <=, >=, !=, &&, ||

¿Puedo combinar funciones y condicionales?
si, puedo tener funciones con condiciones. 
como puedo tener condiciones que ejecutan funciones

2️⃣ Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
```
const tipoDeSuscripcion = "Basic";
switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}

const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion == "Free") {
       console.log("Solo puedes tomar los cursos gratis");
}else if (tipoDeSuscripcion == "Basic") {
     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if (tipoDeSuscripcion == "Expert") {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}else if (tipoDeSuscripcion == "ExpertPlus") {
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
//  la ultima condicion tambien se puede cambiar por este else
}else {
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```


3️⃣ Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).
```
const tipoDeSuscripcion = "Basic";
if (tipoDeSuscripcion == "Free") {
       console.log("Solo puedes tomar los cursos gratis");
}if (tipoDeSuscripcion == "Basic") {
     console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}if (tipoDeSuscripcion == "Expert") {
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
}if (tipoDeSuscripcion == "ExpertPlus") {
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
}
```
💡 Bonus: si ya eres una experta o experto en el lenguaje, te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional. 😏
Quiedo decir que ya habia echo el curso de POO por este motivo este es mi forma de resolverlo sin nisiquier hacer un if
```
function subscription(nameSubpciption,infoSubscription){
    this.nameSubscription = nameSubpciption
    this.infoSubscription = infoSubscription
}
subscription.prototype.sayMessage = function  (){
    return `Si estas suscrito al plan ${nameSubscription} en el cual ${infoSubscription}`
}
const arraySubscription = [
    new subscription("Free","solo puedes tomar los cursos gratis"),
    new subscription("Basic","puedes tomar casi todos los cursos de Platzi durante un mes"),
    new subscription("Expert","puedes tomar casi todos los cursos de Platzi durante un año"),
    new subscription("ExpertPlus","tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año")
]
let userSuscription = "Expert"; // aqui selecionaria/mos el plan
const result = arraySubscription.find( activeSubscription => activeSubscription.sayMessage()); // aqui realizariamos la busqueda
console.log(result.sayMessage()); // imprimimos el resultado
```

Ciclos
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
Es un bloque de instruciones que se van a repetir X veces

¿Qué tipos de ciclos existen en JavaScript?
for/ for of/ for in/ while/ do while

¿Qué es un ciclo infinito y por qué es un problema?
Es cuando nuestra condicion del ciclo no tiene una decision de fin 
por que se queda ejecutando nuestro bloque de instrucciones de por vida (se va llenando la menoria)/ hasta que forzamos la detenidad 

¿Puedo mezclar ciclos y condicionales?
si, puedo tener ciclos que realicen validacion(condiciones) a mis variables

2️⃣ Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
```
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}
let i = 0;
while ( i < 5 ) {
    console.log("El valor de i es: " + i);
    i++
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}
let i = 10;
while ( i >= 2 ) {
    console.log("El valor de i es: " + i);
    i--
}
```
3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es 2 + 2. Si responden bien, mostramos un mensaje de felicitaciones, pero si responden mal, volvemos a empezar.
💡 Pista: puedes usar la función prompt de JavaScript.
```
let usuarioRespuesta;
while (usuarioRespuesta != 4) {
    usuarioRespuesta = prompt('cuánto es 2 + 2?');
    if(usuarioRespuesta == 4){
        console.log('Felicitaciones');
    }
}
```
Listas
1️⃣ Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un array?
Es un conjunto de valores posicionados ordenadamente(en una lista no los valores) en una lista
¿Qué es un objeto?
Es un conjunto de variables que representan algo que tiene propiedades ejem: objeto (taza) propiedades(color, diseño, peso, etc)
¿Cuándo es mejor usar objetos o arrays?
Array para cuando vamos almacenar muchos valores de una categoria  ejem: fruit['apple','blackberry'] vehicle['car','bike']
Mientras que nuestros objetos van mas a la propiedades de nuestra categoria ejem: perro[name:'Toby',race:'frespuder', color: 'brown ']

¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
Si, puedo tener array de objetos
dentro de mis objetos puede tener una propiedad con varias opciones ejem: perro[name:'Toby',race:'frespuder', color: ['brown ','white '] ]

2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

```function arrayPrimero (arrayData){
    console.log(arrayData[0]);
}
```
3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).
```
function arrayPrimero (arrayData){
    for (let i = 0 ; i < arrayData.length();i++){
        console.log(arrayData[i]);
    }    
}
```
4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).
ejemplo de objeto: perro[name:'Toby',race:'frespuder', color: ['brown ','white '] ]
```
function arrayPrimero (objtData){
     console.log(arrayData.name);
     console.log(arrayData.race);
     console.log(arrayData.color[0]);
     console.log(arrayData.color[1]);
}
```