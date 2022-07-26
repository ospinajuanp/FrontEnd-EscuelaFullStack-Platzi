const products = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const myProducts = [];

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const productIndex = products.findIndex(product => product.id==='🍔')
if(productIndex !== -1){
    myProducts.push(products[productIndex])
    products.splice(productIndex,1)
}

console.log("products", products);
console.log("myProducts", myProducts);
console.log("-".repeat(10));

const products2 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update = {
    id:'🥞',
    changes:{
        price:200,
        description:'delicioso'
    }
}
const productIndex2 = products2.findIndex(product => product.id===update.id)
products2[productIndex2]={
    ...products2[productIndex2],
    ...update.changes
}

console.log(products2);


const products3 = [
    { title: 'Pizza', price: 121, id: '🍕' },
    { title: 'Burger', price: 121, id: '🍔' },
    { title: 'Hot cakes', price: 121, id: '🥞' },
];

const update2 = {
    id:'🥞',
    changes:{
        price:200,
        description:'delicioso'
    }
}
products4 = [...products3]
const productIndex3 = products3.findIndex(product => product.id===update.id)
products4[productIndex3]={
    ...products3[productIndex2],
    ...update2.changes
}

console.log(products3);
console.log(products4);


