function multiplyBy5(num){
    return num*5;
}

multiplyBy5.power = 2;

console.log(multiplyBy5(2));
console.log(multiplyBy5.power);
console.log(multiplyBy5.prototype);

function createuser(userName, score){
    this.userName = userName;
    this.score = score;
}

createuser.prototype.increment = function(){
    this.score++;
}

createuser.prototype.printMe = function(){
    console.log(`score is ${this.score}`);
}

const chai = createuser("chai", 25)
const tea = createuser("tea", 250) 

