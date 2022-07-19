const myArray=["value1","value2","value3","value4"];
// let myvar1=myArray[0];
// let myvar2=myArray[1];
// console.log("value of myvar1", myvar1);
// console.log("value of myvar2", myvar2);

let [myvar1,,myvar2, ...myNewArray] = myArray;
//let myNewArray=myArray.slice(2); 
myvar1="value changed";
console.log("value of myvar1", myvar1);
console.log("value of myvar2", myvar2);
//console.log("value of myvar3", myvar3);  (It is Important) 
//console.log("value of myvar4", myvar4);
console.log(myNewArray);