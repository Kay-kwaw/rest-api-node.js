const express = require('express');
const router = express.Router();

router.get('/', async(req, res) => {
    res.send("Get request");
})

// We export the router to makes it accessible in the app.js
module.exports = router;