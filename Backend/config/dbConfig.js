const mongoose = require('mongoose');

mongoose.connect(process.env.mongo_url);

const connection = mongoose.connection;

connection.on('error', (err) => {
  console.error("ERROR! Connecting to the database:", err);
});

connection.on('connected', () => {
  console.log('MongoDB connection successful.');
});

module.exports = connection;
