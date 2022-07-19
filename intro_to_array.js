// intro to arrays
// reference type - jitne reference type hote hai unhe object bolte hai  (Important)
// how to create arrays
// ordered collection of items
let fruits = ["apple","mango","grapes"];
console.log(fruits);

fruits[1]="banana";
console.log(fruits);


// array indexing

let mixed = [1,2,"sagar","prateek",2.9];
console.log(mixed);

console.log(typeof mixed, mixed);

console.log(Array.isArray(mixed));  // this function is used to check ki jo hmne banaya hai sach me array hai ki nhi

let obj = {}; // ye hai object literal

console.log(typeof obj);  // it is also a object 
console.log(Array.isArray(obj));  // but it is not an array