// const mySy = Symbol["key1"]
//  const JsUSer = {
//     name : "Marmik",
//     age : 20,
//     [mySy] : "mykey",
//     location : "Vadodara",
//     email : "marmikvyas777@gmail.com",
//     isLoggedIn : false,
//     lastLoginDays : ["Monday", "Saturday"]
//  } 

//  console.log(JsUSer["location"]);
//  console.log(JsUSer[mySy]); 
 

//  JsUSer.greeting = function()
//  {
//     console.log("hello Js Users");
    
//  }

//  console.log(JsUSer.greeting());

//  JsUSer.greeting2 = function()
//  {
//     console.log(`hello Js Users,${this.name}`);
    
//  }

//  console.log(JsUSer.greeting());

//  console.log(JsUSer.greeting2());


// const tinderUser = {}

// tinderUser.Id = "123abc"
// tinderUser.Name = "Marmik Vyas"
// tinderUser.isLoggedIn = false

// // console.log(tinderUser);

// const regularUser = {
//     email : "marmikvyas42@gmail.com",
//     fullname : {
//         userFullName : {
//             firstname : "Marmik",
//             lastname : "Vyas"
//         }
//     }
// }

// console.log(regularUser.fullname.userFullName.lastname);


// const obj1 = {
//     1: "a", 2:"b"
// }

// const obj2 = {
//     3: "c", 4: "d"
// }

// const obj3 = Object.assign(obj1, obj2)

// const obj3 = { ...obj2 ,...obj1}

// const obj3 = {
//     obj1, obj2
// }

// console.log(obj3)


// console.log(Object.keys(tinderUser));

// console.log(Object.values(tinderUser));

// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename : "Javascript",
    price : "999",
    CourseInstructor : "Hitesh Sir and Babbar Sir"
}

const {CourseInstructor} = course

console.log(CourseInstructor)







