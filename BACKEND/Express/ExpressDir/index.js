const express = require("express");
const app = express();

// console.dir(express);

let port = 3000; // 8080

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
  console.log(`Server is running on http://localhost:${port}`);
});

app.get("/", (req, res) => {
  res.send("Hi I am root");
});

app.get("/:username/:id", (req, res) => { 
  let {username, id} = req.params;
  res.send(`Welcome to the page of @${username} with id ${id}`);
});


app.get("/search", (req, res) => {
  let {q} = req.query;
  if (!q) {
    res.send("Please provide a search term");
    return;
  }
  res.send(`You searched for ${q}`);
}); 


// app.get("/fruits", (req, res) => {
//   let code ="<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
//   res.send(code);
// });
// app.get("/apple", (req, res) => {
//   let code ="<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
//   res.send(code);
// });


// app.get("*", (req, res) => {
//   res.send("This path does not exist");
// });


// app.use((req,res)=>{
//     console.log("request received");
//     let code = "<h1>Fruits</h1> <ul><li>Apple</li><li>Banana</li><li>Orange</li></ul>";
//     // res.send("Hello World");
//     // res.send({
//     //     name: "apple",
//     //     color: "red",
//     //     taste: "sweet",
//     // });
//     res.send(code);
// })
