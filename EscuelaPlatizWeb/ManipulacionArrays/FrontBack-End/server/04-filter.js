// const words = ['spray','limit','elite','exuberant'];

// const newWords = []
// for (let index = 0; index < words.length; index++) {
//     const element = words[index];
//     if(element.length >= 6){
//         newWords.push(element)
//     }
// }
// console.log(newWords);

// const newWords2 = words.filter(item => item.length >= 6)
// console.log(newWords2);

const orders = [
    {
        customerName:'Nicolas',
        total:60,
        delivered:true,
    },
    {
        customerName:'Zulema',
        total:120,
        delivered:false
    },
    {
        customerName:'Santiago',
        total:180,
        delivered:true
    },
    {
        customerName:'Valentina',
        total:240,
        delivered:true
    },
    {
        customerName:'Nicolas',
        total:220,
        delivered:false,
    },
]

// const rt = orders.filter(item => item.delivered)
// console.log(rt);

// const rt2 = orders.filter(item => item.delivered && item.total >= 100)
// console.log(rt2);

const search = (query) => { 
    return orders.filter( item => {
        return item.customerName.includes( query )
    })
}
console.log(search('Ni'));
