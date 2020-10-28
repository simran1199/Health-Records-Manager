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
router.post('/', [auth, [
    check('disease', 'Please mention your disease!!').not().isEmpty(),
    check('symptoms', 'Please mention the major assosiated symptoms!!').not().isEmpty(),
    ]
], async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { disease, symptoms, cause, description, doctor, doctorPhone, treatmentStatus } = req.body;

    try {
        const newRecords = new Records({
            disease:disease,
            symptoms:symptoms, 
            cause: cause, 
            description: description, 
            doctor: doctor, 
            doctorPhone: doctorPhone, 
            treatmentStatus:treatmentStatus,
            user: req.user.id
        });

        const records = await newRecords.save();

        res.json(records);
    } catch (err) {
        console.error(er.message);
        res.status(500).send('Server Error');
    }
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