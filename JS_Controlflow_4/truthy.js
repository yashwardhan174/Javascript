const useremail = "y@mail.com"

if(useremail){
    console.log("Got user email");
}
else{
    console.log("No user email");
    
}

// Falsy Value
//  false , 0 , -0 , BigInt 0n , "" , null , undefined ,  NaN

//Truthy Values
// "0" , "false" , 'false' , " " , [] , {} , function(){}

const emptyObj   = {}

if (Object.keys(emptyObj).length===0){
    console.log("object is empty");
}
//  Nullish Coalescing Operator (??): null undefined
//This operator Removes the null and undefined

let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
val1 = undefined ?? 15

console.log(val1);

//Terniary Operator

//  condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More than 80")


