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
    Genders : {
        type : 'string',
        required : true
    },
})