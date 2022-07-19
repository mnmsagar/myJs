// start, delete, insert  --->> Ye order hai

const myArray= ["item1", "item2", "item3","item4","item5"] ;

// delete

//myArray.splice(1,1);   // jo aap delete kroge wo aapko return me bhi milega to const krke use store bhi kr skte hai variable me and it will be an array
//console.log(myArray);  // ye method bhi original array ko change krega


// insert

//myArray.splice(1,0,"inserted item");  
//console.log(myArray);

//const ans = myArray.splice(1,3); // stored in array
//console.log(ans);
//console.log(myArray);

// insert and delete at a time (together)
const deletedItem = myArray.splice(1,3,"hello","hello2");
console.log(myArray);
console.log(deletedItem);
