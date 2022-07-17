// function moneyBox (coins){
//     let saveCoins = 0;
//     saveCoins += coins;
//     console.log(`MoneyBox: $${saveCoins}`);
    
// }

// moneyBox(5);
// moneyBox(5);





// function moneyBox (){
//     let saveCoins = 0 ;

//     return function countCoins (coins){
//         saveCoins+=coins;
//         console.log(`MoneyBox: $${saveCoins}`);
//     }

// }

// const myMoneyBox = moneyBox();

// myMoneyBox(5);
// myMoneyBox(5);
// myMoneyBox(15);

// const moneyBoxAna = moneyBox();

// moneyBoxAna(10);
// moneyBoxAna(20);
// moneyBoxAna(5);





function moneyBox (){
    
    let saveCoins = 0 ;

    return {
        depositar: function countCoins (coins){
            saveCoins+=coins;
        },
        retirar: function countCoins (coins){
            saveCoins-=coins;
        },
        saldo: function countCoins (){
            return saveCoins
        }

    }

}

const moneyBoxAna = moneyBox();
console.log(moneyBoxAna.saldo());
moneyBoxAna.depositar(5);
console.log(moneyBoxAna.saldo());
moneyBoxAna.retirar(1)
console.log(moneyBoxAna.saldo());