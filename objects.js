// objects -->>> reference type
// arrays are good but not sufficient for real world data
// object store key value pairs
// objects don't have index

// hot to create objects
//const key = "email";
const person={
    name:"Harshit",
    age:22,
    address:"orai",
    hobbies:["guitar","sleeping","listening music"]
}

//console.log(person);

// how to access data from objects
// console.log(person.name);
// console.log(person.age);  
// console.log(person.hobbies);
// console.log(person["name"]);

// // how to add key value pair to object
// person.gender="male";
// console.log(person);

//person["gender"]="male";

// difference between dotand bracket notation

// person["person hobbies"]="Fucking";  // bracket notation use krte hai jb key pair me beech me apace ho tb
// console.log(person);
// person[key]="sagar@gmail.com";
// console.log(person);


// how to iterate objects 

// for in loop
// Object.keys

// for(let key in person){
//     console.log(person[key]);   // bracket will help to compute the value
// }

// for(let key in person){
//     console.log(`${key}:${person[key]}`);
// }


// Object.keys method   // it will produce a array

console.log(Object.keys(person));  

for(let key of Object.keys(person)){
    console.log(person[key]);
}