// let myArr = [0,1,2,3,4,5]

// const myHeroes = ["IronMan", "Spiderman"]

// const myArr2 = new Array(1,2,3,4)

//arrays method

// myArr.push(6,7)
// myArr.pop()
 
// let newArr = myArr.join()


// let mya1 = myArr.slice(1,3)

// console.log(myArr);
// console.log(mya1);

// let mya2 = myArr.splice(1,3)

// console.log(mya2);
// console.log(typeof newArr);


const marvel_heroes = ["thor", "Ironman", "Spiderman"]

const dc_heroes = ["Superman", "Flash", "Batman"]

// const allHeroes = marvel_heroes.concat (dc_heroes)

// console.log(allHeroes);

const allHeroes = [...dc_heroes, ...marvel_heroes]
//spread operator 
console.log(allHeroes);


const another_arr = [1,2,3,[4,5,6], 7, [8,[9,10]]]

const real_another_arr = another_arr.flat(Infinity)

console.log(real_another_arr);



