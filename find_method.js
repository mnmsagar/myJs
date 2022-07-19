const myArray = ["Hello", "cat", "dog", "lion"];

function isLength3(string){
    return string.length === 3;
}

const ans = myArray.find(isLength3);  // ye sirf 1st occurence ki baat krega baad me jo nbhi aaye usse fark nhi padega
// const ans = isLength3("god");
console.log(ans);


const users = [
    {userId : 1, userName : "harshit"},
    {userId : 2, userName : "harsh"},
    {userId : 3, userName : "sagar"},
    {userId : 4, userName : "mathur"},
    {userId : 5, userName : "lala"}
]


const ans1 = users.find((string)=>{
    return string.userName.length===5;    // jo value nhi milti wha undefined aata hai jaise ki 4 krne pr 
})
console.log(ans1);

const ans2 = users.find(user=>user.userId===3);
console.log(ans2);