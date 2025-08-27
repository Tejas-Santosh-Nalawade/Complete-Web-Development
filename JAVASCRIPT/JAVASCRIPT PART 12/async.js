// async functions example

// async function greet() {
//   throw "404 page not found";
// //   return "Hello, World!";
// }

// greet()
//   .then((result) => {
//     console.log("promise was resolved");
//     console.log("result was : ", result);
//   })
//   .catch((err) => {
//     console.error("Promise was rejected:", err);
//   });

//   let  demo = async () => {
//     return 5;
//   }

// await keyword example

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
}

h1 = document.querySelector("h1");

function changeColor(color, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 5) + 1;
      if (num > 3) {
        reject("Error: Random number is greater than 3");
      }
      h1.style.color = color;
      console.log(`color changed to ${color}`);
      resolve("color changed");
    }, delay);
  });
}

async function changeColors() {
  try {
    await changeColor("red", 1000);
    await changeColor("orange", 2000);
    await changeColor("green", 3000);
    await changeColor("blue", 4000);
  } catch (err) {
    console.error("Error changing color: ", err);
  }
  let a = 5;
  console.log(a);
  let b = 10;
  console.log(b);
  let c = a + b;
  console.log(c);
  return c;
}
