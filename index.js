const express = require('express')
const app = express()
const port = 4000;
const fs = require('fs');

app.get('/', (req, res) => {
  res.end('Hello World!');
});



app.get("/list_anime", (req, res) => {
    fs.readFile(__dirname + '/' + 'anime.json', (err, data) => {
        res.end(data);
    });
});


app.listen(port, () => {
    console.log(`app listening at http://localhost:${port}`)
  });