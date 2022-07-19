// const myVar = "value1";  // jb lexical me bhi nhi milta to global me search krti hai
function myApp(){
    const myVar="value1";
     function myFunc(){
        //const myVar ="value59";
        //console.log("inside myFunc", myVar);  // Js pehel apne function me dekhti hai ki variable defined hai y nhi
        // aur agar use wha nhi milta to fr wo lexical environment me dekhti hai
        const myFunc2 = ()=>{
            console.log("inside myFunc",myVar);
        }
        myFunc2();
    
    }
  
     console.log(myVar);
     myFunc();  

}

myApp(); 