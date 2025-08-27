function hello(){
    console.log("Hello");
}

function printPoem(){
    console.log("Twinkle twinkle little star.");
    console.log("How I wonder what you are.");
    console.log("Up above the world so high.");
    console.log("Like a diamond in the sky.");
}
 
function diceRoll(){
    let dice=Math.floor(Math.random()*6)+1;
    console.log(dice);
}

function printName(name){
    console.log(name);
}

function printInfo(name,age){
    console.log(`${name}'s age is ${age}`);
}
// printInfo("Tejas",18);

function calAvg(a,b,c){
    let avg=(a+b+c)/3
    console.log(avg);
}

function Table(n){
    for(let i=n; i<=n*10; i+=n ){
        console.log(i);
    }
}


function getSum(n){
    let sum=0;
    for(let i=1; i<=n; i++){
        sum=sum+i;
    }
    return  sum;
}

let str= ["hi","hello","bye","!"];
function concat(str){
    let result="";

    for(let i=0; i<str.length; i++){
        result+= str[i];
    }
    return result
}

{
    let a=25;
    console.log(a);
}

