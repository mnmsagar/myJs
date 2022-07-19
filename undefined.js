// undefined
// null

//var firstName;
//console.log(typeof firstName);    undefined aayga jb bs initialise kr dege lekin koi value assign nhi krege

//let firstName;
//console.log(typeof firstName);   undefined aayga jb bs initialise kr dege lekin koi value assign nhi krege

// but for const

//const firstName;
//console.log(typeof firstName);   yha pr value define krna compulsory hai

let firstName;
console.log(typeof firstName);
firstName = "Harshit";
console.log(typeof firstName, firstName);

let myVar = null;
console.log(myVar);
myVar= "harshit";
console.log(myVar, typeof myVar);

console.log(typeof null);   // object -- >> it is a bug, error
// because long data is written in Js in market so changinf this will lead to lot of problems

// BigInt
let myNumber = BigInt(123);  // way to convert any number to BigInt
let sameMyNumber = 123n;  // by applying n at the end can convert number to BigInt form
// all operations can be valid between BigInt and Bigint only, no other can take place.
console.log(myNumber);
console.log(myNumber + sameMyNumber);

//console.log(myNumber.MAX_SAFE_INTEGER);