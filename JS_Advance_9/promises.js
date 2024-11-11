const promiseOne =  new Promise(function(resolve , reject){
    //Do an Asyn Task
    //DB calls , cryptography , network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()
    } , 1000)
})

promiseOne.then(function(){
    console.log("Promise Consumed");
    
})

new Promise(function(resolve , reject){
    setTimeout(function(){
        console.log("Async Task Two");
        resolve()
        
    },1000)
}).then(function(){
    console.log(("Async 2 resolved"));
    
})

const promiseThree = new Promise (function(resolve , reject){
    setTimeout(function(){
        // resolve({username: "Yashwardhan" , email: "work.yashwardhan@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
          {resolve({username: "Yashwardhan" , email: "work.yashwardhan@gmail.com"})}
        }else {
            reject('Error: Something Went Wrong')
        }
        
    },1000)
})

promiseFour.then((user) => {
    console.log(user);
    return user.username
}).then((username) => {
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(() =>{
    console.log("the Promise is resolved or rejected");
})

const promiseFive = new Promise(function(resolve , reject){
    setTimeout(function(){
        let error = true;
        if(!error) {
          {resolve({username: "Yashwardhan" , email: "work.yashwardhan@gmail.com"})}
        }else {
            reject('Error: JS Went Wrong')
        }
    },1000)
});

async function consumepromiseFive(){
 try { 
    const response = await promiseFive;
    console.log(response);
} catch (error) {
    console.log(error);
}
}

consumepromiseFive()