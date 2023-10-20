// Import required modules
const express = require('express');
const app = express();
const port = process.env.PORT || 3000; // Define port

// const books = require('./Models/BookModel')

// Require the database connection
const connectDB = require('./Database'); 

// Connect to the database
connectDB();

// Import routes
const apiRoutes = require('./Routers/api');
app.use('/api', apiRoutes);
const BookRoute = require('./Routers/BookRouter')
//middleware  to use Routes
app.use('/books', BookRoute)

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});

app.use(express.json())



// app.post('/books', async(req, res) => {
//     try{
//         const newBooks = await books.create(req.body)
//         res.status(200).json(newBooks);
//     }catch(error){
//         console.log(error.message);
//         res.status(500).json({message:error.message})
//     }
// })
