const mongoose = require("mongoose");
const Table = require("./models/table.js"); // Adjust the path if needed

// Connect to MongoDB
main().then(() => {
    console.log("Database connected");
    // Insert tables after the database connection is successful
    createTables();
});

async function main() {
    await mongoose.connect("mongodb://localhost:27017/kkb_food_flow");
}

async function createTables() {
    const tables = [
        {
            tableNumber: 1,
            qrCode: "QR-1",
            status: "available"
        },
        {
            tableNumber: 2,
            qrCode: "QR-2",
            status: "available"
        },
        {
            tableNumber: 3,
            qrCode: "QR-3",
            status: "available"
        },
        {
            tableNumber: 4,
            qrCode: "QR-4",
            status: "available"
        },
        {
            tableNumber: 5,
            qrCode: "QR-5",
            status: "available"
        }
    ];

    // Insert the tables into the database
    await Table.insertMany(tables);

    console.log("Tables inserted successfully!");
}
