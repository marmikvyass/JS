const promise1 = new Promise((resolve,reject) => {
    //do an async task
    //DB calls, cryptography,network calls
    setTimeout(()=>{
        console.log('async task 1'); 
        resolve();  
    }, 1000)
});  

promise1.then(()=>{
    console.log('task 1 is done');
});

new Promise((resolve,reject) => {
    setTimeout(()=>{
        console.log("Async task 2"); 
        resolve();  
    }, 1000)
}).then(()=>{
    console.log('task 2 is done');
});


new Promise((resolve, reject) => {
    setTimeout(()=>{
          resolve({userName: 'Ironman', email: "marmikvyas@gmail.com"})
    },1000)
}).then((user)=>{
    console.log(user);
})

new Promise((resolve,reject)=>{
    setTimeout(()=>{
        let error =true;
        if(!error){
            resolve({userName:"marmik", password:"123"})
        }
        else{
            reject('ERROR: Something went wrong');
        }
    }, 1000)
})
.then((user)=>{
    console.log(user);
    return user.userName;
    
})
.then((userName)=>{
    console.log(userName);
    
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>console.log("the promise is either resolved or rejected")
) 


const promise5 =new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = true ;
        if(!error){
            resolve({usrName: "Javascript", password:"123"})
        }
        else{
            reject('ERROR: Js went to fuck his mom')
        }
    },1000)
})

async function consumePromise5(){
    try {
        const response = await promise5
        console.log(response);
    } catch (error) {
        console.log(error);
        
    }
    
}

consumePromise5();
// .then((user)=>{
//     console.log(user);
//     return user.userName;
// })
// .then((userName)=>{
//     console.log(userName);
    
// })
// .catch((error)=>{
//     console.log(error);
// })



async function getAllUsers(){
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = response.json()
        console.log(data);
    } catch (error) {
        console.log('ERROR:', error);
        
    }
}

getAllUsers()


fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
    
})
.catch((error)=>{
    console.log(error);
    
}) 