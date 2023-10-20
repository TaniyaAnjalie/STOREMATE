const express = require('express');
const router = express.Router();
const book = require('../Models/BookModel')

const {
    getBooks,
    getBookByID,
    postBook,
    updateBookbyID,
    deleteBook
} = require('../Controllers/BookController');

//Routes
router.post ('/' , postBook)     //create a book
router.get ('/' , getBooks)    //get all books (fetch data)
router.get ('/:id' , getBookByID)     //get a book by id
router.put ('/:id' , updateBookbyID)     //update a book by id
router.delete ('/:id' , deleteBook)     //delete a book

module.exports = router;