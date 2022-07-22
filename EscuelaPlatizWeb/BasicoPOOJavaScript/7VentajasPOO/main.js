class LearningPath {
    constructor({nameLearningPath,courses = []}){
        this.nameLearningPath = nameLearningPath;
        this.courses = courses;
    }
}

LearningPath.prototype.addCourse = function(newCourse){
    this.courses.push(newCourse)        
}

LearningPath.prototype.deleteCourses= function(deleteCourse){
    this.courses = this.courses.filter(course => !deleteCourse.includes(course))
}

const escuelaWeb = new LearningPath({ nameLearningPath : "Escuela de desarrollo web", courses:["Curso historia de la web","Curso profesional de Git y github"]});
const escuelaData = new LearningPath({ nameLearningPath : "Escuela de Data Science" } );
escuelaData.addCourse("Curso de introducion a Data Science")
escuelaData.addCourse("Curso de Postgre SQL")
const escuelaVgs = new LearningPath({ nameLearningPath : "Escuela de videojuegos" } );
escuelaVgs.addCourse("Curso Introduccion a la producion de vgs")
escuelaVgs.addCourse("Curso de Unreal engine")
escuelaVgs.addCourse("Curso de VR con Unity")


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
}


const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [
    escuelaWeb,
    escuelaVgs,
  ],
});


const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [
    escuelaWeb,
    escuelaData,
  ],
});

console.log(juan2.sayLearningPaths());
juan2.addLearningPaths(escuelaData)
console.log(juan2.sayLearningPaths());
juan2.deleteLearningPaths(escuelaWeb)
console.log(juan2.sayLearningPaths());


