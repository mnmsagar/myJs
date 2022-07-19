// how to clone array

// how to concatenate two arrays

// let array1 = ["item1","item2"];
// let array2=array1;  // this means both array are same

// console.log(array1===array2);

// let array1=["item1","item2"];
// let array2=["item1","item2"];
// console.log(array1===array2); // it means both array are not same

let array1=["item1","item2"];
// let array2 = array1.slice(0);
// //console.log(array1===array2);

// array1.push("banana");
// console.log(array1);
//console.log(array2);

// let array2= [].concat(array1);
// array1.push("banana");
// console.log(array1===array2);
// console.log(array1);
// console.log(array2);

// new way spread operator

//let array2= [...array1];
// console.log(array1===array2);
// console.log(array2);

//let array2= array1.slice().concat(["item1","item2"]);
//console.log(array2);
let array3=["item6","item7"];
let array2=[...array1,"item3","item4","item5",...array3];

console.log(array2);

