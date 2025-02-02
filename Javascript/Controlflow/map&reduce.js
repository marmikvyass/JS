// const coding =["ruby", "js", "java"]

// const values = coding.forEach(function (item){
//     console.log(item);
//     return item
// })

// console.log(values);


// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNum.filter(function(num){
//     return num >4 
// })

// console.log(newNums);


// const newNums = []

// myNum.forEach(function(num){
//     if(num > 4) 
//     {
        
//     }
// })


// console.log(newNums);


// const books = [
//     {
//         title: 'Book one', genre: 'Fiction', publish: 1987, edition: 2010
//     },
//     {
//         title: 'Book two', genre: 'history', publish: 1997, edition: 2008
//     },
//     {
//         title: 'Book three', genre: 'Non-Fiction', publish: 1983, edition: 2007
//     },
//     {
//         title: 'Book four', genre: 'Non-Fiction', publish: 1985, edition: 2008
//     },
//     {
//         title: 'Book five', genre: 'history', publish: 1995, edition: 2009
//     },
//     {
//         title: 'Book six', genre: 'Fiction', publish: 1997, edition: 2006
//     },
//     {
//         title: 'Book seven', genre: 'History', publish: 1981, edition: 2010
//     },
// ];

// const userBooks = books.filter((bk)=> bk.genre==='history' && bk.edition >=2000)

// console.log(userBooks); 


// const myNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// // const newnums = myNum.map(function(num){
// //     return num+10
// // })
// const newnums = myNum
// .map((num)=> num*10) 
// .map((num)=> num+1)

// console.log(newnums);


const myNums = [1,2,3]

// const initialValues = 0
// const myTotal = myNums.reduce(function (acc, curr){
//     console.log(`acc: ${acc} & curr ${curr}`);
    
//     return acc + curr 
// }, 0)

// console.log(myTotal);


// const myTotal = myNums.reduce((acc, curr)=>{
//     return acc + curr
// }, 0)

// console.log(myTotal);


const shoppingCart = [
    {
        itemName : "Js Course", price : "2999"
    },
    {
        itemName : "Python", price : "999"
    },
    {
        itemName : "Java", price : "1999"
    },
    {
        itemName : "Mobile-Dev-Course", price : "5999"
    },
]


const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0) 


console.log(priceToPay);
