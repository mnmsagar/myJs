//const navItems=document.getElementsByClassName("nav-item"); // ye html collection de rha tha
let navItems=document.getElementsByTagName("a"); // isse bhi HTML collection milega
console.log(navItems);  // array like object, can use indexing and can iterate
console.log(navItems[1]);

// simple for loop
// for of each loop
// foreach
// Note- We can't use forEch Method to iterate through HTML Collection

// array like objects--- >> indexing, Length Property


// for(let i=0;i<navItems.length;i++){
//     console.log(navItems[i]);
// }

for(let key of navItems){
    console.log(key);
    const navItem=key;
    navItem.style.backgroundColor="white";
    navItem.style.color="green";  // ye green nhi hua kyoki ye apn ne 
    navItem.style.fontWeight="bold";
}

// console.log(Array.isArray(navItems));  // false
// const navItems=document.querySelectorAll(".nav-item");  //  Ye Node List de rha hai
// console.log(navItems[1]);
// console.log(Array.isArray(navItems));  // false

// conversion of HTML Collection to Array

navItems= Array.from(navItems);
console.log(Array.isArray(navItems));  // yha pr saare array ke methods apply kr skte hai yha pr





