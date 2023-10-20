// Import required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Define port

// Require the database connection
const connectDB = require('./Database'); 

// Connect to the database
connectDB();

// Import routes
const apiRoutes = require('./Routers/api');
app.use('/api', apiRoutes);

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
