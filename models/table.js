const mongoose = require('mongoose');

const tableSchema = new mongoose.Schema({
    tableNumber: {
        type: Number,
        required: true,
        unique: true, // Ensuring each table has a unique number
    },
    // qrCode: {
    //     type: String, // Store the generated QR code URL here
    //     required: true,
    // },
    status: {
        type: String,
        enum: ['available', 'occupied'],
        default: 'available',
    },
});

const Table = mongoose.model('Table', tableSchema);
module.exports = Table;
