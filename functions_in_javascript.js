// function singHappyBirthday(){
//     console.log("happy birthday to you...");
// }

// function expression
// const singHappyBirthday = function(){   // insted of const we can use let and var
//     console.log("happy birthday to you...");
// }

// function twoPlusFour(){
//     return 2+4;
// }

const twoPlusFour = function(){
    return 2+4;
}

// function sumTwoNumbers(num1,num2){
//     return num1+num2;
// }

const sumTwoNumbers = function(num1,num2){  // this shows function expression
    return num1+num2;
}

const sum = sumTwoNumbers(9,5);
console.log(sum);

//num1+num2+undefinded = NaN  (Yaad rakho ise)

// function
// input : array, target(number)
//output : index of target if target present in Array
const array = [];
function findTarget(array, num1 ){
        for(let i=0;i<array.length;i++){
            if(array[i]===num1){
                return i;    // jb funtion return krta hai tb agar ek baar koi value return 
                            // ho jaati hai tb function whi ruk jata hai kaam krna  (Important Point to remember )  
            }
        }
        return "not found";
}

findTarget([2,5,7,4,9,6,5], 10);

// arrow functions

const singHappyBirthday = ()=> console.log("Happy bday to you");  // Ye bhi important hai {} ko hta skte hai aur return ko bhi hta skte hai, jb single line ho
console.log(singHappyBirthday());



const isEven =(number)=>{
    return number%2===0; 
}

console.log(isEven(36));    // Importamt Note --->> Jb single parameter ho to paranthesis hta skte hai

