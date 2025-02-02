const user = {
    userName: "Javascript",
    logincount : 8,
    signedIn: true,

    gotUSerDetails: function(){
        // console.log("Got User Detail from Database");
        console.log(this);
        
    }
}

console.log(user.userName);
console.log(user.gotUSerDetails() );


const user2 = {
    userName: "Marmik",
    loginCount:8,
    signedIn:true,

}

// Constructor function


// const promise1 = new Promise();
// const date = new Date();

function User(userName, loginCount, signedIn){
    this.username = userName;
}

this.greeting = function(){
    console.log(`welocme${this.userName}`);
    
} 