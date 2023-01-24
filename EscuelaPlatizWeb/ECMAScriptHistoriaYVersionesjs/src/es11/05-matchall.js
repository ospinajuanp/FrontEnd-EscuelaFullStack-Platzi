const regex = /\b(Apple)+\b/g

const fruits = `Apple, Banana kiwi. Apple and orange`

for (const match of fruits.matchAll(regex)) {
    console.log(match);
}