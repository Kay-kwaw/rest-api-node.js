const express = require('express');
const router = express.Router();
const Alien = require('../models/alien');

router.get('/', (req, res) =>{
   Alien.find()
   .then((result) => {
    res.json(result);
   })
   .catch((error) => {
    res.send(error)
   });
})

router.post('/', async(req, res) => {
    const alien = new Alien({
        name: req.body.name,
        tech: req.body.tech,
        gender: req.body.gender,
    }); 

    alien.save()
    .then((result) => {
        res.json(result);
    })
    .catch((error) => {
        res.send(error);
    });
    
})
// We export the router to makes it accessible in the app.js
module.exports = router;