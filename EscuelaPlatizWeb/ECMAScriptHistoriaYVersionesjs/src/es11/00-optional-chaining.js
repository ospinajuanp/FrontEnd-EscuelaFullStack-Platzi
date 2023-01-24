const users = {
    ospinajuanp:{
        country:'CO'
    },ana:{
        country:'MX'
    }
}

console.log(users.ospinajuanp.country);
console.log(users?.ospinajuanp?.age);
console.log(users?.ospinajuanp?.age || 'No existe');
console.log(users?.ospinajuanp?.age || users?.ospinajuanp?.ages ||'No existe');