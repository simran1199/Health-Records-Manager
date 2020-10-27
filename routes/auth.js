const express = require('express');
const router = express.Router();

// get the loggedin user
router.get('/', (req, res) => {
    res.send('get user');
}); 

// auth user and get token 
router.post('/', (req, res) => {
    res.send('log in user');
}); 

module.exports = router;