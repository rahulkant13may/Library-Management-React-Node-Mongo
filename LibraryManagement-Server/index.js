const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();
app.use(bodyParser.json(), cors());

const booksRoute = require("./routes/books");
app.use("/books", booksRoute);
app.use("/", booksRoute);

// mongoose.connect("mongodb+srv://library:library@123@cluster0-0grfu.mongodb.net/test?retryWrites=true&w=majority", 
mongoose.connect('mongodb://localhost:27017/',
{ useNewUrlParser: true },
() => {
    console.log("Connected to DB!")
})

app.listen(3001);