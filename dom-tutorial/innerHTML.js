const headline = document.querySelector(".headline");
//console.log(headline.innerHTML);

headline.innerHTML='<h1>Inner html changed</h1>';
headline.innerHTML +='<button class="btn" style="height:30px; width:300px; background-color:yellow">Learn More</button>';
console.log(headline.innerHTML);