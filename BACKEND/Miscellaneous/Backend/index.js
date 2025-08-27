const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/register', (req, res) => {
    let {user, password} = req.query;
    res.send(`Standard GET response. Welcome ${user}! `);
  res.send("Standard GET response");
});

app.post('/register', (req, res) => {
    console.log(req.body);
  res.send("Standard POST response");   
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});  