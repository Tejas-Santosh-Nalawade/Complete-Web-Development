// let btn = document.querySelector('button');
// console.dir(btn);

// btn.onclick= function (){
//     console.log('button was clicked');
//     alert('button was clicked');
// }


// btn.onclick = buttonclick;


// let btns = document.querySelectorAll('button');

// for(btn of btns){
//     // btn.onclick = buttonclick;
//     // btn.onmouseenter = function() {
//     //     console.log('you entered a button');
//     // }
//     btn.addEventListener('click', buttonclick);
//     btn.addEventListener('click', sayname);
// }

// function buttonclick(){
//     alert('button was clicked ');

// }

// function sayname(){
//     alert("Apna College");
// }

// let btn =document.querySelector("button");

// btn.addEventListener('click',function() { 
//     let h3 = document.querySelector("h3");
//     let randomcolor= getRandomcolor();
//     h3.innerText= randomcolor;

//     let div = document.querySelector("div")
//     div.style.backgroundColor = randomcolor;

//     console.log("Color updated")
// })

// function getRandomcolor(){
//     let red = Math.floor(Math.random()*255);
//     let green = Math.floor(Math.random()*255);
//     let blue = Math.floor(Math.random()*255);
//     let color = `rgb(${red},${green},${blue})`;
//     return color;
// }


// let btn= document.querySelector('button');
// let h1= document.querySelector('h1');
// let p= document.querySelector('p');
// let h3= document.querySelector('h3');


// function changeColor(){
//     console.dir(this.innerText);
//     this.style.backgroundColor="blue";
// }

// btn.addEventListener('click',changeColor);
// p.addEventListener('click',changeColor);
// h1.addEventListener('click',changeColor);
// h3.addEventListener('click',changeColor);



// let btn =document.querySelector("button");

// btn.addEventListener("click", function(event){
//     console.log(event);
//     console.log("Button Clicked");
// });

// btn.addEventListener("dblclick", function(event){
//     console.log(event);
//     console.log("Button Clicked");
// });



let inp =document.querySelector("input");

inp.addEventListener("keydown", function(event){
    console.log(event);
    console.log("key = ", event.key);
    console.log("code = ", event.code);
    console.log("key was pressed")
})