h1 = document.querySelector("h1");

// function changeColor(color, delay, nextColorChange) {
//   setTimeout(() => {
//     h1.style.color = color;
//     if (nextColorChange) nextColorChange();
//   }, delay);
// }

// changeColor("red", 1000, () => {
//   changeColor("orange", 1000, () => {
//     changeColor("green", 1000, () => {
//       console.log("All colors changed");
//     });
//   });
// });

// using promises

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      h1.style.color = color;
      resolve("color changed to " + color);
    }, delay);
  });
}

changeColor("red", 1000) 
  .then((result) => {
    console.log("red color completed");
    return changeColor("orange", 2000);
  })
  .then((result) => {
    console.log("orange color completed");
    return changeColor("green", 3000);
  })
  .then((result) => {
    console.log("green color completed");
    return changeColor("blue", 4000);
  })
  .catch((error) => {
    console.error("Error changing color: ", error);
  });

// Callback Nesting -> callback hell due to this promises await and async are used

// changeColor("orange", 2000);
// changeColor("green", 3000);

// setTimeout(changeColor("red"), 1000);
// setTimeout(changeColor("orange"), 2000);
// setTimeout(changeColor("green"), 3000);

// using multiple setTimeouts

// setTimeout(() => {
//     h1.style.color = "red";
// }, 1000);

// setTimeout(() => {
//     h1.style.color = "orange";
// }, 2000);

// setTimeout(() => {
//     h1.style.color = "green";
// }, 3000);
