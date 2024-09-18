const user = {
    username : "Yash",
    price : 999,

    welcomemessage: function(){
        console.log(`${this.username} ,  welcome to website `); //this reffers to current context
        // console.log(this)
    }

}

// user.welcomemessage()
// user.username = "Yashwardhan"
// user.welcomemessage()

// console.log(this);


// const chai = function(){
//     let username = "Yash"
//     console.log(this.username);  
// }

const chai = () => {
    let username = "Yash"
    console.log(this);
    
}
// chai()

// const addTwo = (num1 , num2) => {
//     return num1 + num2 //This is explicit return because we have to write return keyword
// }

// const addTwo = (num1 , num2) => num1 + num2  //This is implicit return , no need of {}
// const addTwo = (num1 , num2) => (num1 + num2) //Here no need of return keyword 

const addTwo = (num1 , num2) => ({username: "Yash"}) //Objects cant be defined without parantheses()

// when we wrap a function in {} we have to write return keyword



console.log(addTwo(3,4))