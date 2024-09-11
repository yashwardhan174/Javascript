const tinderUser = new Object()

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "yashvardhannigam@gmail.com",
    fullname:{
        userfullname:{
            firstname: "Yashwardhan",
            lastname: "Nigam"
        }
    }
}

// console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = Object.assign({}, obj1 , obj2)
const obj3 = {...obj1 , ...obj2}
// console.log(obj3);


const user = [
    {

    },
    {

    },
    {

    },
]

user[1].email
console.log(tinderUser);


console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course ={
    coursename: "JS in Hindi",
    price: "999",
    instructor: "Yash"
}

// course.instructor
const {instructor}= course
// console.log(instructor); 

// {
//     "name" : "Yash",
//     "coursename" : "JS in hindi",
//     "price" : "free"
// } //It is a JSON




