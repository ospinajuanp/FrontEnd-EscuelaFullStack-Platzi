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
function createLearningPath({
  name=requiredParam("name"),
  courses=[],
}){
  const private={
    "_name":name,
    "_courses":courses,
  };
  const public={
    get name(){
      return private["_name"];
    },
    set name(newName){
      if(newName.length!=0)
      {private["_name"]=newName;
    }else{
      console.warn("Tu nombre debe tener al menos 1 caracter");
    }
  },
  get courses(){
    return private["_courses"];
  },
};
return public;
}

function createStudent (
  {
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
  const private = {
    "_name" : name,
    "_learningPaths" : learningPaths,
  }

  const public = {
    get name(){
      return private["_name"];
    },
    set name(newName){
      if ( newName.length != 0 ) {
        private["_name"] = newName  
      } else {
        console.warn("Tu nombre debe tener al menos 1 caracter");
        
      }
    },
    get learningPaths(){
      return private["_learningPaths"];
    },
    set learningPaths(newLearningPaths){
      if (!newLearningPaths.name){
        console.warn(`Tu learningpath no tiene cursos`)
        return;
      }
      if (!newLearningPaths.courses){
        console.warn(`Tu learningpath no es una lista de cursos`)
        return;
      }
      if (!isArray(newLearningPaths.courses)){
        console.warn(`Tu learningpath no es una lista de cursos`)
        return;
      }      
      private["_learningPaths"].push(newLearningPaths)
      
    },
    email,
    age,
    approvedCourse,
    socialMedia : {
      twitter,
      instagram,
      facebook,
    },
  }
  return public
}

const juan = createStudent({
  name : "juanito",
  age : 18,
  email : "juanitos@frijolitos.com",
  twitter : "jnito"
})