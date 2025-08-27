// Call Stack 

function one()
{
    return 1;
}

function two()
{
    return one() + one();
}

function three()
{
    let ans =two() + one();
    console.log(ans);
}

three();

// Synchronous Nature of JavaScript

// let a=25;
// console.log(a);
// let b=30;
// console.log(b);
// console.log(a+b);


// Call Backs 

setTimeout(()=>{
    console.log("Hello");
}
, 2000);

setTimeout(()=>{
    console.log("World");
}
, 2000);

console.log("call back");