// change text

const mainHeading=document.getElementById("main-heading");
console.log(mainHeading.textContent);  // ye sara text degi bhale hi wo dikh bhi n rha ho
console.log(mainHeading.innerText);  // ye whi text batayga jo sirf dikh rha hoga
mainHeading.textContent="This is Something Else";