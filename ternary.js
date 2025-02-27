/**
 * Ternary => three parts
 */

// const age = 20;
// normal ternary
// if(age >= 18){
//     console.log('You can vote');
// }else{
//     console.log('Ghumai thako');
// }

// age >= 18 ? console.log('You can vote') : console.log('Ghumai thako');



let price = 1500;
const isLeader = false;

// if(isLeader === true){
//     price = 0;
// }else{
//     price = price + 100;
// }
// console.log(price);


// ternary 
// price = isLeader === true ? 0 : price + 100;
// console.log(price);


// Optional: semi-advanced ternary
// if(isLeader === true){
//     if(price >= 1000){
//         price = price / 2;
//     }else{
//         price = 0;
//     }
// }else{
//     price = price + 100;
// }


// ternary

price = isLeader === true ? price >= 1000 ? price / 2 : 0 : price + 100;

console.log(price);