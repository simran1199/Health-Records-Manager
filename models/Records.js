const mongoose = require('mongoose');

let d = new Date();
//.toISOString().split('T')[0];
const g = `${d.getDate()}-${d.getMonth()+1}-${d.getFullYear()} (at ${d.getHours()}:${d.getMinutes()} IST)`;

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
        type: String,
        default: g
    }
});

module.exports = mongoose.model('records', RecordsSchema);