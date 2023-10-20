// Import required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Define port
const cors = require('cors'); // Import the cors middleware

const connectDB = require('./Database');    // Require the database connection
connectDB();    // Connect to the database

app.use(cors()); // Enable CORS for all routes

// Import routes
const BookRouter = require('./Routers/BookRouter')
//middleware  to use Routes
app.use('/api/books', BookRouter)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.json())