const fruits = ["mango", "papaya","guava","orange","lichi","apple","potato","onion","harmircha"];
//let [fruit1,fruit2,fruit3,fruit4]=fruits;

//console.log(fruit4);

let [,fruit1 , ,fruit2,fruit3,fruit4,...myArray] =fruits;// 
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);
console.log(fruit4);  // spread or rest element must be last element
console.log(myArray)

