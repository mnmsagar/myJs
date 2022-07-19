// trim()
// toUpperCase()
// toLowerCase()
// slice

let firstName="    harshit    ";

console.log(firstName.length);
firstName= firstName.trim();
// let newString = firstName.trim();
// console.log(newString);

console.log(firstName);
console.log(firstName.length);

//console.log(firstName.toUpperCase());
firstName= firstName.toUpperCase();
console.log(firstName);

firstName = firstName.toLowerCase();
console.log(firstName);


// start index
// end index

let newString= firstName.slice(1);  // arshit
console.log(newString);

//let newString= firstName.slice(1,4);  // ars   // last wala include nhi krta hai
//console.log(newString);

