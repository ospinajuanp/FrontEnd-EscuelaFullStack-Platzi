function isObject(subject) {
  return typeof subject == "object";
}
  
function isArray(subject) {
  return Array.isArray(subject);
}
  
function deepCopy(subject) {
  let copySubject;

  const subjectIsObject = isObject(subject);
  const subjectIsArray = isArray(subject);

  if (subjectIsArray) {
    copySubject = [];
  } else if (subjectIsObject) {
    copySubject = {};
  } else {
    return subject;
  }

  for (key in subject) {
    const keyIsObject = isObject(subject[key]);

    if (keyIsObject) {
      copySubject[key] = deepCopy(subject[key]);
    } else {
      if (subjectIsArray) {
        copySubject.push(subject[key]);
      } else {
        copySubject[key] = subject[key];
      }
    }
  }

  return copySubject;
}
  

function requiredParam(param){
  throw new Error(`${param} es obligatorio!`)
}

// function createLearningPath (
//   {
//     name = requiredParam(name),
//     courses = [],
//   }){
//     const private = {
//       "_name" : name,
//       "_courses" : courses,
//     }
//     const public = {
//       get name(){
//         return private["_name"];
//       },
//       set name(newName){
//         if ( newName.length != 0 ) {
//           private["_name"] = newName  
//         } else {
//           console.warn("Tu nombre de ruta debe tener al menos 1 caracter");
//         }
//       },
//       get courses(){
//         return private["_courses"];
//       },

//     }

//     return public

// }

// function createLearningPath({
//   name=requiredParam("name"),
//   courses=[],
// }){
//   const private={
//     "_name":name,
//     "_courses":courses,
//   };
//   const public={
//     get name(){
//       return private["_name"];
//     },
//     set name(newName){
//       if(newName.length!=0)
//       {private["_name"]=newName;
//     }else{
//       console.warn("Tu nombre debe tener al menos 1 caracter");
//     }
//   },
//   get courses(){
//     return private["_courses"];
//   },
// };
// return public;
// }

function LearningPath({
    name=requiredParam("name"),
    courses=[],
  }){
    this.name = name;
    this.courses = courses;


    const private={
      "_name":name,
      "_courses":courses,
    };

  //   const public={
  //     get name(){
  //       return private["_name"];
  //     },
  //     set name(newName){
  //       if(newName.length!=0)
  //       {private["_name"]=newName;
  //     }else{
  //       console.warn("Tu nombre debe tener al menos 1 caracter");
  //     }
  //   },
  //   get courses(){
  //     return private["_courses"];
  //   },
  // };
  // return public;

  }

function Student ({
    name = requiredParam(name),
    email = requiredParam(email),
    age,
    twitter,
    instagram,
    facebook,
    approvedCourse = [],
    learningPaths = [],
  } = {})
  {
    this.name = name;
    this.email = email;
    this.age = age;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    }
    this.approvedCourse = approvedCourse;
    
    if (isArray(learningPaths)){
      this.learningPaths = []
      for (learningPathIndex in learningPaths){
        if (learningPaths[learningPathIndex] instanceof LearningPath){
          console.log("Entre "+ learningPathIndex)
          this.learningPaths.push(learningPaths[learningPathIndex]);
        }else{
          console.warn(`${learningPaths[learningPathIndex]} <- no es verdadero learningPaths`)
          return;
        }
      }
    }else{
      console.warn(`${learningPaths} <- no es un array`)
    }
}
const escuelaDesarrolloWeb = new LearningPath({
  name:"EscuelaWeb",
})
const escuelaData = new LearningPath({
  name:"EscuelaData",
})
const juan = new Student({
  name : "juanito",
  email : "juanitos@frijolitos.com",
  learningPaths:[
    escuelaDesarrolloWeb,
    escuelaData,
    {
      name:"Escuela Impostor",
    }
  ]
})