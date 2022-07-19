// for each

const numbers=[1,6,8,9];

// function multiplyBy2(number,index){
//     console.log("index is",index);
//     console.log(number*2);
// }

// for(let i=0;i<numbers.length;i++){
//      multiplyBy2(numbers[i],i);  
// }


// for this we can simply use forEach Method

numbers.forEach(function(number,index){
    console.log(`number is ${number*2} & index is ${index}`);
})

const users = [
    {firstName : "Sagar", age : 22},
    {firstName : "Mohit", age : 23},
    {firstName : "Arpit", age : 24},
    {firstName : "Sumit", age : 25},
    {firstName : "Sahil", age : 26}
];

users.forEach((user)=>{
    console.log(user.firstName);
    console.log(user.age);
})

for(let user of users){
    console.log(user.firstName);
}
