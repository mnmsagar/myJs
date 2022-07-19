// how to spread a string

const newArray=[..."abcd"];
console.log(newArray);  // It will divide elements into parts

const newArray1=[..."123456789"];  // yha pr agar number likh dete to ye iterable nhi hota
console.log(newArray1);

// spread operator in objects
const obj1 = {
    key1 : "value1",
    key2 : "value2",
    key3 : "value3",
    key1 : "value4"  // yha pr key1 ki value value4 hi rahegi, kyuki jo baad me aata hai whi baad me print hota hai
}
console.log(obj1);

const obj2 ={
    key1 : "value1",
    key2 : "value2"
}

const obj3 = {
    key1 : "valueUnique",
    key3 : "value3",
    key4 : "value4"
}

const newObj ={...obj2,...obj3};  // yha pr key1 ki value "valueUnique" aaygi kyuki wo baad me aarhi hai n
console.log(newObj);

const newObj1 = {...obj3,...obj2,key69:"value99"}; // yha pr key1 ki value value1 aaygi

console.log(newObj1); 
const newObject ={..."abc"};
console.log(newObject);

