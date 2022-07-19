// objects inside array
// very useful in real world applications

const users = [
    {userId : 1, firstName : "Harshit", gender:"male"},
    {userId : 2, firstName : "Mohit", gender : "male"},
    {userId : 3, firstName : "Nitish", gender : "male"}
];

//console.log(users);

for(let user of users){
    console.log(user.firstName);
}