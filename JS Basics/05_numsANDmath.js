const score = 400

const balance = new Number(100)
// console.log(balance);

// console.log(balance.toString().length);
//console.log(balance.toFixed(2));
// console.log(balance.toFixed(1));

const otherNumber = 1123.8966
// 
// console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));

//++++++++++++++++++MATHS++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //It gives positive result
// console.log(Math.round(4.6)); //It gives roundof value if decimal is greater then 5 then next value is giver ex 4.6 => 5 and if 4.4 => 4
// console.log(Math.ceil(4.2)); //it always gives greater number
// console.log(Math.floor(4.9)); //it always gives base number
// console.log(Math.min(4 ,3 ,6 ,8));
// console.log(Math.max(4 ,3 ,6 ,8));

console.log(Math.random()); //It will always give a random value between 0 and 1
console.log(Math.random()*10 + 1); 
console.log(Math.floor(Math.random()*10) + 1); 

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min +1))+min) 