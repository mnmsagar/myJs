
const app = ()=>{
    const myFunc =()=>{
        console.log("hello from myFunc");
    }
    const addTwo =(num1,num2)=> num1 + num2;
    const mul=(num1,num2)=>num1*num2;
    console.log("Inside app");
    myFunc();
    console.log(addTwo(2,3));
    console.log(mul(4,6));
}

app();


