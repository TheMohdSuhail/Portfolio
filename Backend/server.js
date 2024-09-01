const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const dbConfig = require('./config/dbConfig');

app.use(cors({
  origin: 'https://msp-portfolio.onrender.com', // Replace with your frontend domain
  credentials: true,
}));
const portfolioRoute = require("./routes/portfolioRoute");

app.use(express.json());

app.use("/api/portfolio", portfolioRoute);

const port = process.env.PORT || 5000

app.listen(port, () =>{
    console.log(`Server running on port ${port}`);
    
})

