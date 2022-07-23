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
  get sayInfoClass(){
    console.log(`Nombre de clase es: ${this.nameClass} video: ${this.video} recursos: ${this.resources}`);
  }
  get getClass(){
    return this
  }
}

class Courses{
  constructor({
    nameCourse,
    classes = [],
  }){
    this._nameCourse = nameCourse
    this.classes = classes
  }
  get nameCourse(){
    return this._nameCourse;
  }
  set changeName (newCourse){
    if (newCourse == "Curso Malito de Programacion Basica"){
      console.error("Web... no");
    }else{
      this._nameCourse = newCourse;
    }
  }

  set addClass(newClass){
    this.classes.push(newClass);
  }
  set deleteCourses(deleteClasses){
    this.classes = this.classes.filter(classes =>  classes != deleteClasses)    
  }
  get sayClasses(){
    let result = "";
    this.classes.forEach(classe => {
        result +=`${classe.nameClass} - `
    });
    console.log(result);        
  }
  get getClasses(){
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
  set addCourse(newCourse){
      this.courses.push(newCourse);
  }
  set deleteCourses(deleteCourse){
    this.courses = this.courses.filter(course =>  course != deleteCourse)    
  }
  get sayCourses(){
    let result = "";
    this.courses.forEach(course => {
        result +=`${course.nameCourse} - `
    });
    console.log(result);        
  }
  get getCourses(){
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

    set addLearningPaths(newLearningPaths){
        this.learningPaths.push(newLearningPaths)        
    }

    set deleteLearningPaths(deleteLearningPath){
        this.learningPaths = this.learningPaths.filter(item => item != deleteLearningPath)

    }
    get sayLearningPaths(){
        let result = "";
        this.learningPaths.forEach(nameLearningPath => {
            result +=`${nameLearningPath.nameLearningPath} - `
        });
        console.log(result);        
    }
    get getLearningPaths(){
      return this.learningPaths
    }
}

// CREACION DE CLASES
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

// CREACION DE CURSOS
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

// CREACION DE ESCUELAS
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

// CREACION DE ESTUDIANTES
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

console.log(juanStudent);
console.log(miguelitoStudent);


