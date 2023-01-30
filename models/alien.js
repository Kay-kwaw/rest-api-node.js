const mongoose = require('mongoose');

const alienSchema = new mongoose.Schema({

    name : {
        type : 'string',
        required : true
    },
    tech : {
        type : 'string',
        required : true
    },
    gender : {
        type : 'string',
        required : true
    },
})

module.exports = mongoose.model('Alien', alienSchema)