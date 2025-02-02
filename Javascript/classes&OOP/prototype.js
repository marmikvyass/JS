// let myName = "Coding with mik"

// console.log(myName.truelength);



let myHero = ["batman", "superman", "spiderman", "ironman", "captain_america"]


let heroPower = {
    batman: "batpower",
    spiderman: "spider",
    ironman: "iron suit",
    superman: "strong",
    captain_america : "chomdu",

    getSpiderPower: function(){
        console.log(`Spidy Power is ${this.spiderman}`);
    }
}

Object.prototype.marmik = function(){
    console.log(`marmik is prsesent in all objects`);
}

// heroPower.marmik();

myHero.marmik();    

Array.prototype.heymarmik = function(){
    console.log(`marmik says hello to everyone here and not regreting staring this 100 days of code challenge`);
        
}

myHero.heymarmik();
// heroPower.heymarmik();

const user = {
    name: "marmik",
    email: "marmikvyas@gmail.com"
}

const teacher = {
    makeVideo : true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignmen : 'JS Assignment',
    fulltime : true,

    __proto__:teachingSupport
}

teacher.__proto__ =  user;

Object.setPrototypeOf(teachingSupport,teacher);

let userName = "CodingWithMik";

String.prototype.trueLength = function(){
    console.log(`${this.name}`);
    console.log(`${this}`);
    console.log(`true length is ${this.trim().length}`);
}

userName.trueLength(); 








 