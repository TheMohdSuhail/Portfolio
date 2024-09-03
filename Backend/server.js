const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
const dbConfig = require('./config/dbConfig');
const path = require("path"); // Import path module

// Configure CORS
app.use(cors({
  origin: 'https://msp-portfolio.onrender.com', 
  credentials: true,
}));

// Middleware to parse JSON
app.use(express.json());

// API routes
const portfolioRoute = require("./routes/portfolioRoute");
app.use("/api/portfolio", portfolioRoute);

// Serve static files in production
if (process.env.NODE_ENV === "production") {
    app.use(express.static(path.join(__dirname, "../Frontend/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "../Frontend/build/index.html"));
    });
}

const port = process.env.PORT || 5000;

// Start the server
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
