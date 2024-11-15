const express = require('express');
const app = express();

const bodyParser=require("body-parser");
const userRoutes = require("./routes/userRoute");
const giftRoutes = require("./routes/giftRoute");


const PORT=5000;
const cors= require("cors");

app.use(bodyParser.json());
app.use(cors());
app.listen(PORT, () =>{
    console.log('Server is running on PORT 5000');
});

app.use("/api/user", userRoutes);
app.use("/api/gift", giftRoutes);
