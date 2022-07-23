class Class{
  constructor({
    nameClass,
    video = "No tiene",
    resources = "No tiene",
  }){
    this.nameClass = nameClass
    this.video = video
    this.resources = resources
  }
  sayInfoClass(){
    console.log(`Nombre de clase es: ${this.nameClass} video: ${this.video} recursos: ${this.resources}`);
  }
  getClass(){
    return this
  }
}

class Courses{
  constructor({
    nameCourse,
    classes = [],
  }){
    this.nameCourse = nameCourse
    this.classes = classes
  }
  addClass(newClass){
    this.classes.push(newClass);
  }
  deleteCourses(deleteClasses){
    this.classes = this.classes.filter(classes =>  classes != deleteClasses)    
  }
  sayClasses(){
    let result = "";
    this.classes.forEach(classe => {
        result +=`${classe.nameClass} - `
    });
    console.log(result);        
  }
  getClasses(){
    return this.classes
  }
}

class LearningPath {
  constructor({
    nameLearningPath,
    courses = []
  }){
      this.nameLearningPath = nameLearningPath;
      this.courses = courses;
  }
  addCourse(newCourse){
      this.courses.push(newCourse);
  }
  deleteCourses(deleteCourse){
    this.courses = this.courses.filter(course =>  course != deleteCourse)    
  }
  sayCourses(){
    let result = "";
    this.courses.forEach(course => {
        result +=`${course.nameCourse} - `
    });
    console.log(result);        
  }
  getCourses(){
    return this.courses
  }
}

class Student {
  constructor({
        name,
        email,
        username,
        twitter = undefined,
        instagram = undefined,
        facebook = undefined,
        approvedCourses = [],
        learningPaths = [],
    }){
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
    }

    addLearningPaths(newLearningPaths){
        this.learningPaths.push(newLearningPaths)        
    }

    deleteLearningPaths(deleteLearningPath){
        this.learningPaths = this.learningPaths.filter(item => item != deleteLearningPath)

    }
    sayLearningPaths(){
        let result = "";
        this.learningPaths.forEach(nameLearningPath => {
            result +=`${nameLearningPath.nameLearningPath} - `
        });
        console.log(result);        
    }
    getLearningPaths(){
      return this.learningPaths
    }
}

const clase1 = new Class({
  nameClass:'Clases en javascript',
  video:'https://platzi.com/clases/2332-javascript-poo/38621-clases-en-javascript/'
})
const clase2 = new Class({
  nameClass:'Ventajas de la programación orientada a objetos',
  video:'https://platzi.com/clases/2332-javascript-poo/38622-ventajas-de-la-programacion-orientada-a-objetos/'
})
const clase3 = new Class({
  nameClass:'Que es Abstracion',
  video:'https://platzi.com/clases/2332-javascript-poo/38623-que-es-abstraccion/'
})
const clase4 = new Class({
  nameClass:'Abstracion',
  video:'https://platzi.com/clases/2332-javascript-poo/38624-abstraccion-en-javascript/'
})

const cursoProgramacionBasica = new Courses({
  nameCourse:"Curso Gratis de Programacion Basica",
  classes:[
    clase1,
    clase2
  ]
})
const cursoDefinitivoHTML = new Courses({
  nameCourse:"Curso Definitivo de HTML y CSS",  
  classes:[
    clase1,
    clase3
  ]
})
const cursoPracticoHTML = new Courses({
  nameCourse:"Curso Practico de HTML y CSS",  
  classes:[
    clase1,
    clase4
  ]
})
const cursoBasicoPOO = new Courses({
  nameCourse:"Curso Gratis de Programacion Basica",
  classes:[
    clase2,
    clase3
  ]
})
const cursoBasicoJsPOO = new Courses({
  nameCourse:"Curso Gratis de Programacion Basica",
  classes:[
    clase3,
    clase4
  ]
})



const escuelaWeb = new LearningPath({ 
  nameLearningPath : "Escuela de desarrollo web",
  courses:[
    cursoProgramacionBasica,
    cursoDefinitivoHTML,
    cursoPracticoHTML]
});
const escuelaJs = new LearningPath({ 
  nameLearningPath : "Escuela de desarrollo web",
  courses:[
    cursoPracticoHTML,
    cursoBasicoPOO,
    cursoBasicoJsPOO]
});


const juanStudent = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
  ],
});


const miguelitoStudent = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaJs
  ],
});

rutasJuan = juanStudent.getLearningPaths()
cursosJuan = rutasJuan[0].getCourses()
clasesCurso = cursosJuan[0].getClasses()
contenidoClase = clasesCurso[0].getClass()

console.log(juanStudent.sayLearningPaths());

console.log(rutasJuan[0].sayCourses());

console.log(cursosJuan[0].sayClasses());

console.log(clasesCurso[0].sayInfoClass());

console.log(contenidoClase);
