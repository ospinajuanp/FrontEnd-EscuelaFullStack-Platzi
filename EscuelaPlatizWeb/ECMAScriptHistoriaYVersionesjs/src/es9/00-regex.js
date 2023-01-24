const regex = /(\d{4})-(\d{2})-(\d{2})/;

const marchers = regex.exec('2023-01-24')

console.log(marchers);
console.table(marchers);