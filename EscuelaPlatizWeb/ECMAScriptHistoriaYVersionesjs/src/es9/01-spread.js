const user = {username:'ospinajuanp', age:26,country:'CO'}
const { username, ...values } = user

console.log(username);
console.log(values);