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
  
//   const studentBase = {
//     name: undefined,
//     email: undefined,
//     age: undefined,
//     approvedCourses: undefined,
//     learningPaths: undefined,
//     socialMedia: {
//       twitter: undefined,
//       instagram: undefined,
//       facebook: undefined,
//     },
//   };
  
//   const juan = deepCopy(studentBase);
// //   Object.defineProperties(juan,"name",{
// //     value:"Juanito",
// //     configurable:false,
// //   })
// // CONFIGURAR MI OBJETO ESTE SEGURO (NO DEJA BORRAR)
// Object.seal(juan);
// // CONFIGURAR MI OBJETO ESTE SEGURO (NO DEJA BORRAR, NO DEJA MODIFICAR)
// //Object.freeze(juan);
// // VALIDAD MI OBJETO ESTE SEGURO (NO DEJA BORRAR)
// Object.isSealed(juan)
// // VALIDAD MI OBJETO ESTE SEGURO (NO DEJA BORRAR, NO DEJA MODIFICAR)
// Object.isFrozen(juan)


function requiredParam(param){
  throw new Error(`${param} es obligatorio!`)
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
  }

  const public = {
    readName(){
      return private["_name"]
    },
    changeName(newName){
      private["_name"] = newName
    },
    email,
    age,
    approvedCourse,
    learningPaths,
    socialMedia : {
      twitter,
      instagram,
      facebook,
    },
  }
  Object.defineProperty(public,"readName",{
    configurable : false,
    writable : false,
  })
  return public
}

const juan = createStudent({
  name : "juanito",
  age : 18,
  email : "juanitos@frijolitos.com",
  twitter : "jnito"
})