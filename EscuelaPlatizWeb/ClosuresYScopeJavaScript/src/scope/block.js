function fruit(){
    if(true){
        var fruitOne = 'Apple' // function-local scope
        let fruitTwo = 'Kiwi' // block scope
        const fruitThree = 'Banana' // block scope
    }
    console.log(fruitOne)
    console.log(fruitTwo)
    console.log(fruitThree)
    
}

fruit()