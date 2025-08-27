const express = require("express");
const path = require("path");

const app = express();
const port = 8080;

app.use(express.static(path.join(__dirname, "public/js")));
app.use(express.static(path.join(__dirname, "public/css")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/ig/:username", (req, res) => {
    let { username } = req.params;
    const instaData = require("./data.json");
    const data = instaData[username];
//   const followers = ["adam", "eve", "john", "doe"];
//   let { username } = req.params;
//   res.render("instagram", { username,followers });
if(data)
{
    res.render("instagram.ejs", {data});
}
else{
    res.render("error.ejs");
}

});

app.get("/rolldice", (req, res) => {
  let num = Math.floor(Math.random() * 6) + 1;
  res.render("rolldice", { dicevalue: num });
});

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.listen(port, () => {
  console.log("Server is running on port 8080");
});
