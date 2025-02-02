class user{
    constructor(userName, email, password){
        this,userName = userName;
        this.email = email;
        this,password = password;
    }

    encryptPassword(){
        return `${this.password}abc`;
    }
    changeUsername(){
        return `${this.userName.toUpperCase()}`;
    }
}

const chai = new user("chai", "chai@google.com", "123")

console.log(chai.encryptPassword());
