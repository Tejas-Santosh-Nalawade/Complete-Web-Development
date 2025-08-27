// // Printing odd number

// for (let i=1; i<=15; i=i+2){
//     console.log(i);
// }

// console.log("Backward");

// for(let i=15; i>=1; i=i-2){
//     console.log(i);
// }

// console.log("Even Number")

// //Printing even number

// for(let i=2; i<=10; i=i+2){
//     console.log(i);
// }

console.log("Backward");

for(i=10; i>=2; i=i-2){
    console.log(i);
}


// Infinite loops

// for (let i=1; i>=0; i++){
//     console.log(i);
// }

// // Loop printing multiplication table of n
// let n=prompt("Enter which table you want to print")
// n=parseInt(n)
// for (let i=n; i<=n*10;i=i+n){
//     console.log(i);
// }

// Loop printing multiplication table of 5

// for(let i=5; i<=50; i=i+5){
//     console.log(i);
// }
// Nested for loop

// for(let i=1; i<=3;i++){
//     for(let j=1; j<=3; j++){
//         console.log(i)
//     }
// }

// While Loop

let i=1;
while(i<=5){
    console.log(i);
    i++
}

// console.log("Backward")

// let n=5
// while(n>=1){
//     console.log(n);
//     n--
// }



// Activity Favorite Movie

// const FavMovie="Avatar";

// let guess=prompt("Favorite Movie :");
// while((guess!=FavMovie)) {
//     if(guess=="quit"){
//         console.log("You Quit");
//         break;
//     }
//     guess=prompt("wrong guess. please try again");
// }

// if(guess == FavMovie) {
//     console.log("congrats!!");
// }


// Break Keyword

// let i=1;
// while(i<=5){
//     if(i== 3){
//         break;
//     }
//     console.log(i);
//     i++;
// }

// console.log("We use break at 3")


// Loops with Arrays

// let fruits=["mango","apple","banana","litchi","orange"];
// for (let i=0; i< fruits.length; i++){
//     console.log(i,fruits[i]);
// }

// Nested loops with nested arrays

// let heroes = [["ironman","spiderman","thor"],["superman","wonder women","flash"]];

// for(let i=0; i<heroes.length; i++){
//     console.log(`List #${i}`);
//     for (let j=0; j<heroes[i].length; j++){
//         console.log(heroes[i][j]);
//     }
// }


// for of loop

// let fruits = ["mango", "apple","banana","orange","litchi"];

// for(fruit of fruits){
//     console.log(fruit);
// }

// for (char of "apnacollege"){
//     console.log(char);
// }

// Nested for of loop

// let heroes = [["superman","batman","wonder women"],["spiderman","ironman","thor"]];
// for(list of heroes){
//     for(hero of list){
//         console.log(hero);
//     }
// }