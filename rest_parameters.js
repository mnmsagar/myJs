function myFunc(a,b,...c){
    console.log(a);
    console.log(b);
    console.log(c);
}

myFunc(1,2,3,5,6,9,7);


function addall(...a){
    let sum=0;
    for(let i=0;i<a.length;i++){
        sum=sum+a[i];
    }
console.log(sum);
}

addall(1,2,3,6);


