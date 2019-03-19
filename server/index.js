const express = require("express");
const app = express();
const parser = require("body-parser");
// const db = require('../database');
const path = require("path");
const cors = require("cors");
const port = process.env.PORT || 3000


app.use(cors());
app.use(parser.json());
app.use(express.urlencoded({ extended: true }));


app.use(express.static(path.join(__dirname + "/../client/dist")));



// app.get('/map', (req, res) => {
//     db.query('SELECT * FROM bathroomFinder', (err, result) => {
//         if (err) {
//             console.log(err)
//         } else {
//             res.send(result)
//         }
//     })

// })


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../client/dist/index.html"));
  });


app.listen(port, () => {
    console.log(`connected to the server:${port}`);
});


