const numbers=[1,2,3,4,5,10];

// aim : sum of all the numbers in array

const sum = numbers.reduce((accumulator, currentValue)=>{
    return accumulator+currentValue;
},0); // ye 100 yha pr as a initial value kaam krta hai

console.log(sum);


// accumulator , currentValue ,  return
//     1               2            3  
//     3               3            6
//     6               4           10
//    10               5            5
//    15              10           



const usercart = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 15000},
    {productId : 4, productName : "machine", price : 12000}
]


console.log(usercart.reduce((totalPrice, currentPrice)=>{
    return totalPrice + currentPrice.price;
}, 0));


// total Price     currentValue        return
//  0                12000              12000
// 12000              22000             34000
// 34000             15000               49000    

