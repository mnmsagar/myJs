// methods -->> functions inside objets

const personInfo = function(){
  console.log(`Person name is ${this.firstName} and Person age is ${this.age}`);
}

const person1 = {
    firstName : "harshit",
    age : 18,
    //about:function(){
  //      console.log(`Person name is ${this.firstName} and Person age is ${this.age}`);
    //    console.log(this);
   // }
   about : personInfo
};


const person2 = {
  firstName : "Mohit",
  age : 18,
  about : personInfo
};

const person3 = {
  firstName : "Rohit",
  age : 17,
  about : personInfo
};

person1.about();
person2.about();
person3.about();

personInfo();
