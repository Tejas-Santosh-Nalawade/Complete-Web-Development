// Promises are used to handle asynchronous operations in JavaScript.
// A promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

// function savetodb(data, success, failure) {
//   let internetSpeed = Math.floor(Math.random() * 10) + 1;
//   if (internetSpeed > 4) {
//     // console.log("your data was saved: ", data);
//     success();
//   } else {
//     // console.log("weak connection data not saved");
//     failure();
//   }

//   console.log("data saved to db");
// }

// Causing callback hell like this in real life is not a good idea cause confusion

// savetodb(
//   "user data",
//   () => {
//     console.log("Success: Your data saved successfully");
//     savetodb(
//       "helloworld",
//       () => {
//         console.log("Success2: Your data2 saved successfully");
//         savetodb(
//           "tejas",
//           () => {
//             console.log("Success3: Your data3 saved successfully");
//           },
//           () => {
//             console.log("Failure3: Your data3 was not saved");
//           }
//         );
//       },
//       () => {
//         console.log("Failure2: Your data2 was not saved");
//       }
//     );
//   },
//   () => {
//     console.log("Failure: Your data was not saved");
//   }
// );

function savetoDb(data) {
  return new Promise((resolve, reject) => {
    let internetSpeed = Math.floor(Math.random() * 10) + 1;
    if (internetSpeed > 4) {
      // console.log("your data was saved: ", data);
      resolve("success: data saved to db");
    } else {
      // console.log("weak connection data not saved");
      reject("failure: weak connection");
    }
  });
}

// let request = savetoDb("Apna College");
// savetoDb("Apna College")
//   .then(() => {
//     console.log("promise was resolved");
//     console.log(savetoDb("Apna College"));
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//     console.log(savetoDb("Apna College"));

//   });

// Imporove version  Promise chaining
// savetoDb("Apna College")
//   .then(() => {
//     console.log("promise1 was resolved");
//     return savetoDb("Tejas");
//   })
//   .then(() => {
//     console.log("promise2 was resolved");
//     return savetoDb("hello world");
//   })
//   .then(() => {
//     console.log("promise3 was resolved");
//   })
//   .catch(() => {
//     console.log("promise was rejected");
//   });

  // Promises are  rejected or resolved with some  data (valid result or error )
savetoDb("Apna College")
  .then((result) => {
    console.log("promise1 was resolved");
    console.log("result of promise: ",result);
    return savetoDb("Tejas");
  })
  .then((result) => {
    console.log("promise2 was resolved");
    console.log("result of promise: ",result);
    return savetoDb("hello world");
  })
  .then((result) => {
    console.log("result of promise: ",result);
    console.log("promise3 was resolved");
  })
  .catch((error) => {
    console.log("promise was rejected");
    console.log("Error of promise",error);
  });

