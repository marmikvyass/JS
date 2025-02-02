// setTimeout()
//its used to execute the program after specific time period 

// setInterval()
//its used to execute the program repeatedly after every time  intervals you have set

// const sayMik = function(){
//     console.log("Mamrik");    
// }

// const alertMessage = function(){
//     document.querySelector('h1').innerHTML = "Hello Babes"
// }

// const noChange = setTimeout(alertMessage, 2000)

// document.querySelector('#stop').addEventListener('click', function(){
//     clearTimeout(noChange)
//     console.log("stopped"); 
// })


// setInterval(() => {
//     console.log("Codign with Mik");
    
// }, 2000);


 
    const Fullname = function(){
    console.log("Coding with Mik");
        
    }
    let jaadugar;
    const startFunc = document.querySelector('#start').addEventListener('click', function(){
     jaadugar = setInterval(Fullname, 1000)
    })
    
    
    document.querySelector('#stop').addEventListener('click', function(){
    clearInterval(jaadugar)
    console.log("stopped");   
    })



