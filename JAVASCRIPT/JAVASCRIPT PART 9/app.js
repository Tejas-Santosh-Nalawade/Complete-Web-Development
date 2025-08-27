// let smallImages =document.getElementsByClassName("oldImg");

// for (let i=0; i< smallImages.length; i++){
//     console.dir(smallImages[i].src);
// }

// console.dir(document.querySelector("h1"));
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldImg"));


let para1= document.createElement("p");
para1.innerText="Hey I'm red para";
document.querySelector("body").append(para1);

para1.classList.add('red');

let h3= document.createElement("h3");
h3.innerText="Hey I'm blue h3";
document.querySelector("body").append(h3);

h3.classList.add('blue');

let div =document.createElement("div");
let h1 = document.createElement("h1");
let para2 = document.createElement("p");

h1.innerText="I'm in a div";
para2.innerText= "ME TOO";

div.append(h1);
div.append(para2);

div.classList.add("box");
document.querySelector("body").prepend(div);

// Practice Question

// Ans 1
let button=document.createElement("button");
let input=document.createElement("input");
button.innerText="Click Me";
document.querySelector("body").append(input);
document.querySelector("body").append(button);

// Ans 2
button.setAttribute("id","btn");
input.setAttribute("placeholder","username");

// Ans 3
let btn=document.querySelector("#btn");
btn.classList.add("btnStyle")

//Ans 4 
let heading1=document.createElement("h1");
heading1.innerHTML="<u>DOMPractice</u>";
document.querySelector("body").append(heading1);

// Ans 5
let p= document.createElement("p");
p.innerHTML="Apna College <b>Delta</b> Practice";
document.querySelector("body").append(p);