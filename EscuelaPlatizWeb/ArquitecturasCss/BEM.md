# BEM

* B - Bloque
* E - Elemento
* M - Modificador

## Como funciona

Bloque es un contenedor principal

- Card
- Button
- Form
- Menu
- Header
- ETC

Elementos partes internas de ese contenedor

- Icon
- Text
- Item
- Image
- Input
- ETC

Modificador variaciones tanto del bloque como del elemento

- Active
- Hover
- Secondary
- Red
- ETC

## Como usarlo

- [BLOQUE]
- [BLOQUE]__[ELEMENTO]
- [BLOQUE]--[MODIFICADOR]
- [ELEMENTO]--[MODIFICADOR]
- [BLOQUE]__[ELEMENTO]--[MODIFICADOR]

Ejemplo

- .button
- .button--active
- .button__icon
- .button__text


`<button class='button button--active'> `

`<i class='button__icon'>a</i> `

`<span class='button__text'>a</span>`

`</button>`

## Por que y para que

Para un mejor manejo en proyecto mucho mas grande ya que tienen un impacto mayor.

- Para tener un css mas fácil de leer, entender, mantener y escalar.

- Para organizar las clases de css en módulos independientes.

- Para evitar selectores anidados.

## Ejemplos

Bloque = card  
Elementos = image, text  
Modificadores = no tiene

`<div class="card">`

`....<img class="card__image" src="/image.png" alt="spacesuit"/>`

`....<p class="card__text"></p>`

`....<p class="card__text"></p>`

`</div>`

Bloque = navbar  
Elementos = logo, items  
Modificadores = gray

`<nav class="navbar">`

`....<ul class="navbar">`

`........<li class="navbar__item"><i class="navbar__icon"></i></li>`

`........<li class="navbar__item">MENS</li>`

`........<li class="navbar__item">WOMENS</li>`

`........<li class="navbar__item">KIDS</li>`

`........<li class="navbar__item">ACCESSORIES</li>`

`........<li class="navbar__item">PREMIUM</li>`

`........<li class="navbar__item navbar__item--gray">ACCOUNT</li>`

`........<li class="navbar__item navbar__item--gray">SEARCH</li>`

`........<li class="navbar__item">CART (0)</li>`

`....</ul>`

`</nav>`

## Que hacer en estos casos

LO QUE SI  
Dejar la clase principal card y añadir otra clase con modificador.

`<div class="card card--flat"></div>`

LO QUE NO 
Dejar la clase principal solo con el modificador.

`<div class="card--flat"></div>`

LO QUE SI  
No representara los niveles de profundidad de html con BEM

`<div class="card">`  
`....<img src="/image.png" alt="Crew Dragon" class="card__image">`  
`....<p class="card__text">`  
`........<i class="card__icon"></i>`  
`....</p>`  
`</div>`  

LO QUE NO
Representar los niveles de profundidad de html con BEM  
`<div class="card">`  
`....<img src="/image.png" alt="Crew Dragon" class="card__image">`  
`....<p class="card__text">`  
`........<i class="card__text__icon"></i>`  
`....</p>`  
`</div>`  

## Problemas comunes

Problema1: Tengo un componente A que ya tiene sus propias clases y deseo añadirlo a un nuevo componente B. Debo agregar una nueva convención para el componente A que esta dentro de B?  

Componente A  
`<button class="button button--active"></button>`

Componente B 
`<div class="card">`
`....<img class="card__image" src="/imagen.png" alt="Crew Dragon"/>`
`</div>`


R:  
`<div class="card">`  
`....<img class="card__image" src="/imagen.png" alt="Crew Dragon"/>`  
`....<button class="button button--active"></button>`  
`</div>`

Problema2: En mi estructura de HTML tengo padres, hijos, nietos, tataranietos, etc; pero BEM solo deja usar 3 niveles. Que hago con los elementos nietos y sus descendientes?

`<div class="card">`  
`....<img class="card__image" src="/imagen.png" alt="Crew Dragon"/>`  
`....<div class="card__footer">`  
`........<p class="card__footer__text">`    
`............<i class="card__footerd__text__icon"></i>`    
`........</p>`  
`....</div>`  
`</div>`

R: 
`<div class="card">`  
`....<img class="card__image" src="/imagen.png" alt="Crew Dragon"/>`  
`....<div class="card__footer">`  
`........<p class="card__text">`    
`............<i class="card__icon"></i>`    
`........</p>`  
`....</div>`  
`</div>`


## BEM + SASS  

BEM  
.card{  
    ...  
}

.card__image{  
    ...  
}

.button{  
    ...  
}

.button__active{  
    ...  
}

SASS  
.card{    
    &__image{  
        ...  
    }  
}

.button{    
    &__active{  
        ...  
    }  
}

## Recomendaciones

Los proyecto que usan BEM son:

- Fáciles de leer
- Muy intuitivos
- Permiten evitar selectores anidados

BEM permite personalizar sus reglas y nomenclaturas.