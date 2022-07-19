// array push pop
// array shift unshift

let fruits = ["apple","mango","grapes"];

// push --->> last me add krne k liye
console.log(fruits);
fruits.push("banana");   // this method is mutable like it can change original array lekin primitive ke case me esa nhi hota tha
console.log(fruits);

//let removed = fruits.pop();   // Ye hamesha last se remove krega
//console.log(fruits);
// fruits.pop();
// console.log(fruits);
//console.log("popped fruit is",removed);

// unshift    ---->> Starting me insert krne k liye ise use krte hai
 
fruits.unshift("banana");
fruits.unshift("Oranges");
console.log(fruits);

// shift  --->> Starting se remove krne k liye ise use krte hai


fruits.shift();
fruits.shift();

console.log(fruits);


// push and pop are more faster than shift and unshift  (Interview Question)