// console.log("hello");

// try {
//     console.log(a);
// } catch{
//     console.log(a);
// }

// const sum=(a,b) =>{
//     console.log(a+b);
// }

// const mul =(a,b)=>(
//     a*b
// );

// setTimeout(()=>{
//     console.log("apna college")
// },4000);

// setInterval(()=>{
//     console.log("Apna college");
// },4000);

// Practice question
let id=setInterval(()=>{
    console.log("Hello World");
},2000);

setTimeout(() => {
    clearInterval(id); 
}, 10000);
