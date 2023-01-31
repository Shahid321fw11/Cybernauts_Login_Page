require("dotenv").config();
const express = require('express');
const app = express();
const cors = require("cors");
const connectDB = require('./db')
const userRoutes = require('./routes/users')
// DB connection
connectDB()

// middlewares
app.use(express.json());
app.use(cors());

// routes
app.use("/api/users", userRoutes);


app.get('/',(req,res)=>{res.send("Hello world")})
const port = process.env.PORT||8080;

app.listen(port,()=>console.log(`server is running on ${port}`))