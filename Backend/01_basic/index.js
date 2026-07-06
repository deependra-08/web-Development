require('dotenv').config()
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/login', (req,res)=>{
    res.send('Login page');
}); 

app.get('/deep',(req,res)=>{
    res.send("New REsponse PORT=4000 send");
});

app.get("/youtube", (req, res) => {
  res.send(`
    <h1>YouTube</h1>
    <a href="https://www.youtube.com" target="_blank">
      Visit YouTube
    </a>
  `);
});

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
}); 