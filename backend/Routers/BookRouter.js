const express = require('express');
// const book = require('../Models/BookModel')
const router = express.Router();

const {} = require('../Controllers/BookController');

//Routes

router.post ('/' , postBook)     //create a user

router.get ('/' , getBooks)    //get all users (fetch data)
router.get ('/:id' , getBookByID)     //get a user by id

router.put ('/:id' , updateBookbyID)     //update a user by id
router.put ('/:id' , updatedBook)     //update a user

router.delete ('/:id' , deleteBook)     //delete a user

module.exports = router;