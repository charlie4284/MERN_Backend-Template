const mongoose = require('mongoose');

const schema = mongoose.Schema;

const itemSchema = new schema({
    name:{
        type: string,
        required: true,
    },
})