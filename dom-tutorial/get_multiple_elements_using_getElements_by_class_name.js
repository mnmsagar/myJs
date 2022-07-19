// const navItems=document.getElementsByClassName("nav-item"); // ye html collection de rha tha
// console.log(navItems);  // array like object, can use indexing and can iterate
// console.log(navItems[1]);
// console.log(Array.isArray(navItems));  // false

const navItems=document.querySelectorAll(".nav-item");  //  Ye Node List de rha hai
console.log(navItems[1]);
console.log(Array.isArray(navItems));  // false

// ye dono HTML Collection and Node list both are only array like objects means they are not exactly an array



