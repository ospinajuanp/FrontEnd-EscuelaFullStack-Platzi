// OBJETO LITERAL

const natalia = {}

console.log(natalia);

const nataliaObject = {
    name:"natalia",
    age:20,
    cursosAprobados:[
        "Curso Definitivo de HTML y CSS",
        "Curso Definitivo de HTML y CSS"
    ],
    // aprobarCurso:function(){
        
    // },
    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)        
    }
}

nataliaObject.aprobarCurso("Curso de CSS Grid")

console.log(nataliaObject);


// OBJETO PROTOTIPO
function Student (name,age,cursosAprobados){
    this.name = name;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
    // this.aprobarCurso = function (nuevoCurso){
    //     this.cursosAprobados.push(nuevoCurso)        
    // }
}
Student.prototype.aprobarCurso = function (nuevoCurso){
    this.cursosAprobados.push(nuevoCurso)        
}

const juanita = new Student(
    "juanita alejandra",
    15,
    [
        "curso introduccion a los videojuegos",
        "curso creacion de personaje"
    ]
)

console.log(juanita);


// OBJETO CLASE

class Studen2{
    constructor(name,age,cursosAprobados){
        this.name = name;
        this.age = age;
        this.cursosAprobados = cursosAprobados;

        // this.aprobarCurso = function (nuevoCurso){
        //     this.cursosAprobados.push(nuevoCurso)        
        // }
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)        
    }

}

const miguel = new Studen2(
    "Miguel",
    20,
    [
        "curso analisis de negocios para ciencia de datos",
        "curso de principio de visualizacion de datos para BI"
    ]
)

console.log(miguel);



// OBJETO CLASE - RORO

class Studen3{
    constructor({
        name,
        age,
        twitter = null,
        instagram = null,
        facebook = null,
        cursosAprobados = [],
        email = null,
        }
    ){
        this.name = name;
        this.age = age;
        this.twitter = twitter,
        this.instagram = instagram,
        this.facebook = facebook,
        this.email = email,
        this.cursosAprobados = cursosAprobados;

        // this.aprobarCurso = function (nuevoCurso){
        //     this.cursosAprobados.push(nuevoCurso)        
        // }
    }

    aprobarCurso(nuevoCurso){
        this.cursosAprobados.push(nuevoCurso)        
    }

}

const carlos = new Studen3({
        name:"carlos",
        age:18,
        email:"carlos@correo.com"
    }
)

console.log(carlos);