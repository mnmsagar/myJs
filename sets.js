// Sets (it is iterable)
// store data
// sets also have its own methods
// No index-based access
// Order is not guranteed
// Unique items only(no duplicates allowed)


const numbers= new Set([1,2,3,3]);
console.log(numbers);
// console.log(numbers[2]); undefined

const items= ["item1", "item2", "item3","item4","item5"] ;
const num=new Set();
num.add(1);
num.add(items);
num.add(items);
num.add(3);
num.add(["item1", "item2", "item3","item4","item5"]);  // ese to add kr skte hai kyuki ye ek alag array hai memory me(Interview Questions)
console.log(num);

if(num.has(1)){
    console.log("1 is present");
}
else {
    console.log("1 is not present");
}

for(let number of num){
    console.log(number);
}

const myArray=[1,2,3,3,4,4,5,5,6];
const uniqueElements = new Set(myArray);  // paas krna aur add krne me fark hota hai
// uniqueElements.add(myArray); ya pr add kr rhe hai n ki paas
console.log(uniqueElements);// yha length nhi use kr skte undefined aayga

let length = 0;
for(let element of uniqueElements){
    length++;
}
console.log(length);