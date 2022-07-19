// sort method
// ASCII TABLE
// char : ascii value

// '0' : 48
// '1' : 49
// '2' : 50
// '3' : 51
// '4' : 52
// '5' : 53
// '6' : 54
// '7' : 55
// '8' : 56
// '9' : 57

// sort
// 5,9,1200,400,3000
//5,9,400,1200,3000 (expected)

const numbers = [5,9,1200,400,3000];
//[53,57,49,52,51]
//numbers.sort();
//console.log(numbers);  // js as a string me sort krta hai n ki as a number

 // iska fayda bhi hai aur nuksan bhi 
 // names ke liye to ye perfect hai lekin numbers k liye nhi 
//  const userNames =['harshit','abcd','mohit','nitesh','aabc','AABC'];  // capital letter pehle aayge fr small wale
//  userNames.sort();
//  console.log(userNames); // yha pr jo sorting hai wo ekdum perfect hoga

numbers.sort((a,b)=>{
    return a-b;
});
// numbers.sort((a,b)=>a-b); 
console.log(numbers);

// 1200, 410
// if a-b  ---->> positive ( greator than zero)
// then b ko pehle rakh do fr a ko
// aur agar a-b --->> negative , (less than zero)
// tb a ko pehle then b ko rakhna hai 

// for descending order return b-a kr dena hai bs 

// price lowToHigh HighToLow
const products = [
    {productId:1, productName:"p1",price:300},
    {productId:2, productName:"p2",price:600},
    {productId:3, productName:"p3",price:900},
    {productId:4, productName:"p4",price:500},
    {productId:5, productName:"p5",price:700},
]

// products.sort((a,b)=>{
//     return a.price - b.price;   ye methoad original array ko bhi effect krega to ye theek nhi hai filhal
// })
// console.log(products);

const lowToHigh =products.slice(0).sort((a,b)=>{
    return a.price - b.price;  // ye methoad original array ko bhi effect nhi krega to ye theek hai filhal
});

console.log(lowToHigh);
console.log(products);

