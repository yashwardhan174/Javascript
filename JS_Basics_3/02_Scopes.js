


if (true){
    let a = 10
    const b = 20
    var c = 30
    // console.log("Inner", a);
    
}
//Things written under{This} are called scope.

// console.log(a); //if we print a here it will give error because it is declared inside scope and we are calling it outside the scope if we want to print a then we have to call it inside the socpe itself
// console.log(b);
// console.log(c); //c will be printed outside the scope also because it is declared with var. Therefore we avoid using var 



function one(){
    const username = "Yash"
    function two(){
        const website = "youtube"
        // console.log(username);
    }

    // console.log(website);

    two()
}
// one()

if(true){
    const username = "Yashwardhan"
    if (username === "Yashwardhan") {
        const website = " youtube"
        // console.log(username + website);
    }
}


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num + 1
}

addone(5)

const addTwo = function(num){
    return num + 2
}

addTwo(5)

