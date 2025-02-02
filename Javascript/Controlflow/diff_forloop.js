// //FOR OF LOOP

// // const arr = [1, 2, 3, 4, 5]

// // for (const num of arr) {
// //     // console.log(num);  
// // }


// // const heroes = "Ironman"
// // for (const supp of heroes) {
// //     console.log(supp);   
// // }
  

// const map = new Map()
// map.set('IN', 'India')
// map.set('USA', 'America')
// map.set('FR', 'France')
// map.set('IN', 'India')

// // console.log(map);

// for (const [key, value] of map) {
//     console.log(key, ':-', value);
    
// }

// const myObj = {
//     'game1' : 'NFS',
//     'game2' : 'GTA5'
// }

// for (const [key, value] of myObj) {
//     console.log(key);
// }

//object is not iteratable by this method 



//FORIN LOOP

// const myObj1 = {
//     js : 'Javascript',
//     cpp : 'c++',
//     rb : 'Ruby'
// }

// for (const key in myObj1) {
//    // console.log(myObj[key]);
    
// }

// const prog = ["js", "java", "c++", "py", "rb"]

// for(const key in prog)
// {
//     console.log(prog[key]);   
// } 


//ForEach loop


const coding =["ruby", "js", "java"]

//this loop is only for array
// coding.forEach( function (val){
//     console.log(coding);   
// })


// function printMe(item){
//      console.log(item);     
// }

// coding.forEach(printMe)

// coding.forEach(function(item){
//     console.log(item);
    
// })


const myCoding = [

        {
            languageName: "javascript",
            languageFileName: "js"
        },
        {
            languageName: "Java",
            languageFileName: "java"
        },
        {
            languageName: "Python",
            languageFileName: "py"
        }
]


myCoding.forEach(function(item){
    console.log(item.languageFileName);
})

