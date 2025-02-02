//Immediately Invoked Function Expression (IIFE)

(function chai(){
    console.log(`DB Connected`);
})();

(()=>{
    console.log(`DB Connected again`);
    
})();

(function aurCode(){
    console.log(`DB Connected 3rd Time`);
    
})();

//above is named IIFE means it has given name 

((name)=>{
    console.log(`My Name ${name}`);    
})('Marmik')

//simple IIFE


(()=>{

})() //by this way we can also declare a function