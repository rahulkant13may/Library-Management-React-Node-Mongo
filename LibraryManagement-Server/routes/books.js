const express = require("express");
var MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://localhost:27017/';

const router = express.Router();

const Book = require("../models/Book");

router.get("/", (req, res) => {
    // res.send("we are on home")
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("test");
        dbo.collection("books").find({}).toArray(function(err, result) {
            if (err) throw err;
            console.log("RESULT ----", result);
            // res.render(result.json())
            res.send(result)
            db.close();
          });
        });

})

router.post('/', (req, res) => {
    const book1 = new Book({
        name: req.body.name,
        description: req.body.description
    })

    book1.save()
        .then(data => {
            res.json(data);
        })
        .catch(err => {
            res.json({message: err})
        })
  })

  module.exports = router;