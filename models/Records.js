const mongoose = require('mongoose');

const RecordsSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'users'
    },
    disease : {
        type: String,
        required: true
    },
    symptoms: {
        type: String,
        required: true,
    },
    cause: {
        type: String
    },
    description: {
        type: String
    },
    doctor: {
        type: String,
        required: true
    },
    doctorPhone: {
        type: String
    },
    treatmentStatus: {
        type: String,
        default: 'Ongoing'
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('records', RecordsSchema);