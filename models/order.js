const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    table: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Table',
        // required: true, // Link to the table the order was made from
    },
    items: [
        {
            food: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'MenuItem',
                required: true,
            },
            quantity: {
                type: Number,
                required: true,
                min: 1, // Must order at least 1 item
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
    orderStatus: {
        type: String,
        enum: ['pending', 'in progress', 'completed', 'delivered', 'cancelled'],
        default: 'pending',
    },
    orderDate: {
        type: Date,
        default: Date.now(),
    },
});

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
