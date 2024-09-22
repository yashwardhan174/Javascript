//Immediately Invoked Function expression (IIFE)

// function chai(){
//     console.log(`DB CONNECT`);
    
// }
// chai()

(function chai(){
        console.log(`DB CONNECT`);
     })(); //this is another way of executing it
//It is neccesary to use ; because IIFE doesnt know where to stop execution and it will create issue in execution of other functions
    
( (name) => {
    console.log(`DB CONNECT TWO ${name}`);
    
})("Yash")     