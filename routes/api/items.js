const express = require('express');
const router = express.Router();

//Item Model
const item = require('../../models/item');

// @route GET api/items
// @desc GET all items
// @access Public
router.get('/',(req, res)=>{
    item.find()
        .sort({name: 1}) //1: ascending sort, -1: descending sort
        .then(items=>res.json(items))
});

// @route POST api/items
// @desc create an item
// @access Public
router.post('/',(req, res)=>{
    const newItem = new item({
        name:req.body.name
    });
    newItem.save().then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc delete an item
// @access Public
router.delete('/:id',(req, res)=>{
    item.findById(req.params.id) //fetches id from URI
        .then( item=> item.remove().then(()=> res.json({success:true})))
        .catch(err => res.status(404).json({success:false}));
})

module.exports = router;