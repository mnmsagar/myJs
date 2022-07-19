// break keyword
// continue keyword

for(let i=1;i<=10;i++){
    if(i===4){  // break se wha pr loop se bahar aate hai jha consdition true ho jaaye
        break;
    }
    console.log(i);
}

for(let i = 1;i<=10;i++){
    if(i===4){
        continue;
    }
    console.log(i);  // continue me sirf wo statement nhi chalta jha pr condition true hoti hai, uske alawa har jagah true ho jata hai
}
console.log("Hello There");