class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`Username: ${this.username}`);
    }

    static createID(){ // static doesnt allow others to access properties of createID
        return `123`
    }
}

const yash = new User("yash")
// console.log(yash.createID()); // createID cant be accesed because of static keyword
class Teacher extends User {
    constructor(username , email){
        super(username)
        this.email = email
    }
}

const iPhone = new Teacher("iPhone" , "i@phone.com")
console.log(iPhone.createID());
