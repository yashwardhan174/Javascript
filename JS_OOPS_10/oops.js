const user = {
    usernamne: "Yashwardhan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        console.log("got user details from database");
        console.log(`Username: ${this.usernamne}`);

        console.log(this)
    }
}

// console.log(user.getUserDetails());
// console.log(user.loginCount)

