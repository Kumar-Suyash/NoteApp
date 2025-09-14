// Import express
const express = require('express');
const { dbconnection } = require('./config/db');
require('dotenv').config();
const cors = require('cors');
const router = require('./Routing/noteRouter');

dbconnection();

// Create an app instance
const app = express();

// Middleware
app.use(cors()); // enable CORS
app.use(express.json());
app.use('/api', router);

// Basic route
app.get('/', (req, res) => {
  res.send('Note Application');
});

// 404 handler
app.use((req, res) => {
  res.status(404).send("Route not found");
});

// Start the server
app.listen(process.env.PORT, (err) => {
  console.log(`Server is running on ${process.env.PORT}`);
});
