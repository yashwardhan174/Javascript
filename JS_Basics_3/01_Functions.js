function sayMyName(){
    console.log("Y");
    console.log("A");
    console.log("S");
    console.log("H");
} //This is function defination

sayMyName() //This is function calling


// function addTwoNums(num1 , num2){ //(num1 , num2) are parameters
//     console.log(num1 + num2);
    
// }
function addTwoNums(num1 , num2){ //(num1 , num2) are parameters

    // let result = num1+num2
    // return result
    return num1+num2   
}

const result = addTwoNums(3 , 4) //(3 ,4) are arguments
// console.log("Result: ", result)

function loginusermessage(username){
    if(username === undefined){ //instead of (username === undefined) we can also use(!username)
        console.log("Please enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginusermessage("Yash"))
console.log(loginusermessage());

// we can pre define username so that value doesnt becomes undefined
 function loginusermessage(username = "Yash"){
    if(username === undefined){ //instead of (username === undefined) we can also use(!username)
       console.log("Please enter a username");
       return
     }
     return `${username} just logged in`
    }


function calculatecartprice(val1 , val2 , ...num1){ //... is a rest operator and a spread operator depending on its usecase
    return num1
}

console.log(calculatecartprice(200 , 400 , 600 , 2000));

const user = {
    username: "yash",
    price: 199
}

function handleObject(anyobject){
    console.log(`Username is${anyobject.username} and price is ${anyobject.price}){anyobject.price}`);
}

// handleObject(user)

handleObject({
    username: "Yash",
    price: 399
})

const neearray = [200 , 400 , 100 , 600]
function returnsecondvalue(getArray){
    return getarray[1]
}

// console.log(rerturnsecondvalue(newarray);

console.log(returnsecondvalue([200 , 400 , 500 , 20003]));


