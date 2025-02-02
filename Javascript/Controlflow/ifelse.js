//if control flow
// const temp = 23
// if(temp < 30){
//     console.log("Today is a cool day");
// }

// else{
//     console.log("today is a hot day");
// }


// const score = 200

// if(score > 100){
//     const power = "Fly"
//     console.log(`User Power : ${power}`);   
// }

//short hand notation

// const balance  = 1000

// if(balance >500) console.log("Ur Rich");

//nesting 

// if(balance < 500)
// {
//     console.log("Ur Poor");
// }
// else if(balance < 750)
// {
//     console.log("Ur still Poor");   
// }
// else{
//     console.log("Ur Rich");   
// }


const userLoggedIn = true
const debitCard = true
const userLoggedInFromGoogle = false
const userLoggedInFromEmail = true

if(userLoggedIn && debitCard){
    console.log("Allow to buy courses");
    
}

if(userLoggedInFromEmail || userLoggedInFromGoogle)
{
    console.log("User Logged in");
    
}