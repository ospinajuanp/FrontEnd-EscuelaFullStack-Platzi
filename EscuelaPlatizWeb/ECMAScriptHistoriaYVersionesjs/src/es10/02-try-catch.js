// try catch tradicional
try{
    hello()
}catch (error){
    console.log(error);
}

// try catch generando un mensaje personalizado sin usar - error -
try{
    anotherFn()
}catch {
    console.log('Esto es un error');
}