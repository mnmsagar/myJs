
const numbers=[3,4,6,1,8];

// const square = function(number){
//     Consoole.log(number*number);
// }

//const squarerNumber = numbers.map(square);
//console.log(squarerNumber);  // jb kuch return nhi krte tb undefined return hota hai 

// when using map method return krna necessary hai 

// map method me naya array milega


const squareNumber= numbers.map((number, index)=>{
return `index : ${index}, ${number*number}`;
} );
console.log(squareNumber);


const users = [
    {firstName : "Sagar", age : 22},
    {firstName : "Mohit", age : 23},
    {firstName : "Arpit", age : 24},
    {firstName : "Sumit", age : 25},
    {firstName : "Sahil", age : 26}
];


const userNames= users.map((user)=>{
    return user.firstName;
})
console.log(userNames);


