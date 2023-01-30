const http = require('http');
const express = require('express');
const mongoose = require('mongoose');

const app = express();

const dbURL= "mongodb+srv://kwawkumi:Miezah%40%31@cluster0.wmhlwoy.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(dbURL), {useNewUrlParser:true}; 

// What this function basically does is to sending all incoming requests request to the aliens.js
const alienRouter = require('./routes/aliens');
app.use('/aliens', alienRouter);


app.listen(3000, () => {
    console.log("listening on port 3000");
});
