//npm install mongoose
const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost:27017/Love_Gift", {});

mongoose.connection.on("connected", () => {
    console.log("Connected to MongoDB");
});

mongoose.connection.on("error", (error) => {
    console.error('MongoDB connection error : ${error}');
});

module.exports =mongoose;