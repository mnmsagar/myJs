const numbers = [3,5,8,9];
// isme koi bhi ek number even hoga to ye true retuen krega same for every method usme saare even hoge tb wo true return kreg
// ye same and or or boolean jaise hai

const ans = numbers.some(number=>number%2===0);
console.log(ans);

const usercart = [
    {productId : 1, productName : "mobile", price : 12000},
    {productId : 2, productName : "laptop", price : 22000},
    {productId : 3, productName : "tv", price : 15000},
    {productId : 4, productName : "machine", price :120000}
]

const ans1=usercart.some(cartItem=>cartItem.price>100000);
console.log(ans1);