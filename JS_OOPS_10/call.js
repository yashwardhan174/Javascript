function SetUsername(username){
    this.username = username
}

function createUser(username , email , password){
    SetUsername.call(this , username)
    
    this.email = email
    this.password = password
}

const calling = new createUser("yash" , "work.yashwardhan@gmail.com" , "1234")

console.log(calling);
