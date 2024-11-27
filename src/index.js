const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerJsdoc = require('swagger-jsdoc');
const app = express();

// Swagger setup
const swaggerOptions = {
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Love Gifts API Documentation",
        version: "1.0.0",
        description: "Comprehensive documentation for User, Gift, Cart, Task, User Task and Partner management APIs",
        contact: {
          name: "Love Gifts Support",
          email: "thaonguyen68161@gmail.com",
        },
  
        
      },
      servers: [
        {
          url: "http://localhost:5000",
          description: "Local development server",
          
        },
        {
          url: "https://api.learningjournal.space",
          description: "Production server",
        }
      ],
    },
    apis: ["./src/routes/*.js"],
  };
  
const swaggerDocs = swaggerJsdoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  
  
const bodyParser=require("body-parser");
const userRoutes = require("./routes/userRoute");
const giftRoutes = require("./routes/giftRoute");
const taskRoutes =  require("./routes/taskRoute");
const usertaskRoutes = require("./routes/usertaskRoute");
const cartRoutes = require("./routes/cartRoute");
const partnerRoutes = require("./routes/partnerRoute");

const PORT=5000;
const cors= require("cors");

app.use(bodyParser.json());
app.use(cors());
app.listen(PORT, () =>{
    console.log(`Server is running on PORT ${PORT}`);
});

app.use("/api/user", userRoutes);
app.use("/api/gift", giftRoutes);
app.use("/api/task", taskRoutes);
app.use("/api/usertask",usertaskRoutes);
app.use("/api/cart", cartRoutes);
app.use("/api/partner", partnerRoutes);
module.exports = app;
