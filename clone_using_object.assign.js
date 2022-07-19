

const obj = {
    key1: "value1",
    key2 :"value2"
}

//const obj2 = obj;
//obj.key3="value3";


// const obj2 ={...obj};

const obj2 = Object.assign({},obj);  // tarah se bhi cloning ho jaati hai


console.log(obj);  // ek me add krne pr dono me show kr rha hai islie clone krne padege
console.log(obj2);


