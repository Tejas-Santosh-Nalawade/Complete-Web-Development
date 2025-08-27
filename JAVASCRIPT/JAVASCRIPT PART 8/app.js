// let arr=[1,2,3,4,5];
// arr.forEach(function(el){
//     console.log(el)
// })


// let print = function(el){
//     console.log(el);
// }
// arr.forEach(print)

// forEach Array function

// let arr=[{
//     name:"Tejas",
//     marks: 95
// },
// {    
//     name:"Rahul",
//     marks: 98
// },
// {
//     name:"Rohit",
//     marks: 97
// }];

// arr.forEach((student)=>{
//     console.log(student.marks);
// })


// Map Array function

// let num=[1,2,3,4];
// let double= num.map((el)=>{
//     return el*el
// })

// Filter Array Function

// let num=[1,2,3,4,5,9,7,21,54,68,11];
// let ans=num.filter((el)=>{
//     return el%2!=0;
// })


// Finding Maximum in Array

// let arr=[1,2,3,45,8,9,4,59,7,8];
// let max=-1
// for(i=0; i<arr.length; i++){
//     if(max<arr[i]){
//         max=arr[i];
//     }
// }

// console.log(max);

//      OR

// let max=arr.reduce((max,el)=>{
//     if(max<el){
//         return el;
//     } else{
//         return max;
//     }
// });

// console.log(max);

// Destructuring
// let names=["tony","bruce","steve","peter"];
// let [winner,runnertop] = names;
// console.log(winner,runnertop);