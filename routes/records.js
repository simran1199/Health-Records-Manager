const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require('express-validator');

const User = require('../models/User');
const Records = require('../models/Records');

// get the user's records
router.get('/', auth, async (req, res) => {
    try {
        const records = await Records.find({ user: req.user.id }).sort({ date: -1 });
        res.json(records);
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
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