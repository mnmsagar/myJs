const users = [
    {userId : 1, firstName : "Harshit", gender:"male"},
    {userId : 2, firstName : "Mohit", gender : "male"},
    {userId : 3, firstName : "Nitish", gender : "male"}
];

const [{firstName},,{gender}] = users;
console.log(firstName);
console.log(gender);
