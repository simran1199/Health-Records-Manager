const express = require('express');
const router = express.Router();

// get the user's records
router.get('/', (req, res) => {
    res.send("get user's records");
}); 

// add new  records
router.post('/', (req, res) => {
    res.send("add new records");
}); 

// update  records
router.put('/:id', (req, res) => {
    res.send("update records");
}); 

// delete  records
router.delete('/:id', (req, res) => {
    res.send("delete records");
}); 

module.exports = router;