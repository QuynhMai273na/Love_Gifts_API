
const mongoose = require("mongoose");
require("dotenv").config();  // Thêm dòng này để load các biến môi trường từ file .env

// Sử dụng biến môi trường MONGODB_URI từ file .env
const mongoURI = process.env.MONGODB_URI || "mongodb://localhost:27017/Love_Gift"; // fallback nếu không có MONGODB_URI

mongoose.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.error(`MongoDB connection error: ${error}`);
});

module.exports = mongoose;