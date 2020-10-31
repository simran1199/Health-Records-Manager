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
        console.error(err.message);
        res.status(500).send('Server Error');
    }
}); 

// update  records
router.put('/:id', auth, async (req, res) => {
    const {disease, treatmentStatus, symptoms, cause, description, doctorPhone, doctor} = req.body;

  // Build record object
  const recordFields = {};
  if (disease) recordFields.disease = disease;
  if (treatmentStatus) recordFields.treatmentStatus = treatmentStatus;
  if (symptoms) recordFields.symptoms = symptoms;
  if (cause) recordFields.cause = cause;
  if (description) recordFields.description = description;
  if (doctor) recordFields.doctor = doctor;
  if (doctorPhone) recordFields.doctorPhone = doctorPhone;

  try {
    let record = await Records.findById(req.params.id);

    if (!record) return res.status(404).json({msg: 'Record not found'});

    // Make sure user owns contact
    if (record.user.toString() !== req.user.id) {
      return res.status(401).json({msg: 'Not authorized'});
    }

    record = await Records.findByIdAndUpdate(
      req.params.id,
      {$set: recordFields},
      {new: true},
    );

    res.json(record);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
}); 

// delete  records
router.delete('/:id',auth, async(req, res) => {
   try {
       let record = await Records.findById(req.params.id);
       if(!record) return res.status(404).json({ msg: 'Record not found'});

       if(record.user.toString() !== req.user.id) {
           return res.status(401).json({msg: 'Not authorized'});
       }
       await Records.findByIdAndRemove(req.params.id);
       res.json({msg: 'Contact removed'});
   } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
   }
}); 

module.exports = router;