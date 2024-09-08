// singleton --> jab literals se bnaege to nhi bnega bss constructor k sath singleton bnega
//EX- object.create
//object literals

const JSuser={
    name: "Yash",
    age: 20,
    location: "Indore",
    email: "work.yashwardhan@gmail.com",
    isLoggedIn: false,
    lastLogindays: ["Monday" , "Saturday"]
}

console.log(JSuser["email"])

JSuser.email = "yashvardhannigam@gmail.com" //the email has been changed
Object.freeze(JSuser) //After this no changes can be done 
