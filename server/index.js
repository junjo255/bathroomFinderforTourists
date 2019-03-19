const express = require("express");
const app = express();
const parser = require("body-parser");
const db = require('../database');
const port = 3000





app.get('/', (req, res) => {
    db.query('SELECT * FROM bathroomFinder', (err, result) => {
        if (err) {
            console.log(err)
        } else {
            res.send(result)
        }
    })

})


app.listen(port, () => {
    console.log(`connected to the server:${port}`);
});


