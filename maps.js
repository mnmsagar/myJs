// Maps
// map is an iterable

// store data in ordered fashion

// store key value pair (like object)
// duplicate keys are not allowed like objects

// different between maps and objects

// objects can only have string or symbol as key

// In maps, you can use anything as key like array, number, string


// object literal
// key -> string
// Key -> symbol
// const person={
//     firstName : "harshit",
//     age : 7,
//     1 : "one"
// };

// console.log(person.firstName);
// console.log(person["firstName"]);
// console.log(person[1]);
// for(let key in person){
//     console.log(typeof key);
// }


// key value pair
const person = new Map();
person.set('firstName', 'Harshit');
person.set('age',7);
person.set(1, 'one');
console.log(person.get(1));
console.log(person.keys());

for(let key of person.keys()){
    console.log(key, typeof key);
}

console.log(person);