const mongoose = require('mongoose');

const TareaSchema = mongoose.Schema({
    tareareco: {
        type: String,
        required: true
    },
    urgencia: {
        type: String,
        required: true
    },
    hora: {
        type: Date,
        required: true
    },
    fechaCreación: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Tarea',TareaSchema);