const numbers = [2,4,6,8,10];

function isEven(number){
    return number%2===0;
}



const ans = numbers.every(isEven);


//const ans = numbers.every(number=>number%2===0);
console.log(ans);

// callback function --> true/false (boolean)
// every method ----> true / false (boolean)


const usercart = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 15000},
    {productId : 4, productName : "machine", price :12000}
]


// check every price < 30000

const ans1 = usercart.every(product=>product.price<30000);
console.log(ans1);