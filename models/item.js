const mongoose = require('mongoose');

const schema = mongoose.Schema;

const itemSchema = new schema({
    name:{
        type: string,
        required: true,
    },
})

module.exports = Item = mongoose.model('item', itemSchema);