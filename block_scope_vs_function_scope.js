// block scope vs Function scope

// let and const are block scope
// var is function scope


{
    let firstName = "harshit";
}
console.log(firstName);


{
    let firstName = "mohit";
    console.log(firstName);
}

const firstName = "garima";
console.log(firstName); 