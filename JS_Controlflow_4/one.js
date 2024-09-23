// if , if else , else if

const temprature = 41

// if(temprature === 41){
//     console.log("Temprature is Less then 50");
// }
// else{
//     console.log("Temprature is greater then 50"); 
// }

// < , > , <= , >= , == , != , === , !==


// const score = 200
// if (score >100){
//     const power = "fly" 
//     console.log(`User Power: ${power}`);
// }
//console.log(`User Power: ${power}`);

const balance = 1000
// if(balance>500) console.log("No charges"); //This is implicit scope

// if (balance < 500){
//     console.log("less than 500");
    
// }
// else if(balance < 750){
//     console.log("less than 750");
    
// }
// else if(balance < 900){
//     console.log("less than 900");
    
// }
// else{
//     console.log("Less than 1200");
    
// }

const userLoggedIn = true
const DebitCard = true
const LoggedInGoogle = false
const loggedInEmail = true

if(userLoggedIn && DebitCard && 2==2){ //in && all conditions must be same
    console.log("Allowed to Shop");
}

if(LoggedInGoogle || loggedInEmail){
    console.log("Login Succesful");
    
}


