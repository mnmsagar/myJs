
function myfunc2(name){
    console.log("Inside my func 2");
    console.log(`your name is ${name}`);
}

function myFunc(callback){
    console.log("Hello There");
    callback("Sagar");
}



myFunc(myfunc2 );   // jb funtion me kuch bhi pass nhi krege to undefined aayga