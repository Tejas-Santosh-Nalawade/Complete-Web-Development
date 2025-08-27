let url = "https://catfact.ninja/fact";

// fetch(url)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//     console.log("data 1: ",data.fact); // Access the fact property from the JSON data
//     return fetch(url); // Fetch the URL again
//   }) // Parse the JSON from the response to read the ReadSteam
//   .then((res) => {
//     console.log(res);
//     return res.json(); // Parse the JSON from the response
//   })
//   .then((data2) => {
//     console.log("data2: ",data2.fact); // Access the fact property from the JSON data
//   }) // Parse the JSON from the response to read the ReadSteam
//   .catch((error) => {
//     console.error("There was a problem with the fetch operation:", error);
//   });
// console.log("I am Happy");

/// using async await

async function getFacts() {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res2 = await fetch(url);
    let data2 = await res2.json();  
    console.log(data2.fact); // Access the fact property from the JSON data
  } catch (error) {
    console.error("There was a problem with the fetch operation:", error);
  }
  console.log("I am Happy");
}
