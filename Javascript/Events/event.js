// document.getElementById('owl').onclick = function(){
//     alert('owl Clicked'); 
// }

// document.getElementById('owl').addEventListener('click', function(event){
//     console.log("owl clicked again")
//     event.stopPropagation()
// }, false)

// document.getElementById('images').addEventListener('click', function(event){
//     console.log("clicked manually");
    
// }, false)

//false  = bubbling mode inside to outside
//true = capturing mode outside to inside
//event.Stoppropogation() it stops the bubbling or the capturing mode

// document.getElementById('google').addEventListener('click', function(event){
//     event.preventDefault()
//     event.stopPropagation()
//     console.log("google clicked");  
// })


document.querySelector('#images').addEventListener('click', function(event){
    console.log(event.target.parentNode);
    let removeIt = event.target.parentNode
    removeIt.remove()
},false)