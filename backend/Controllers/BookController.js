const Book = require('../Models/BookModel')

//create a book
const postBook = async(req, res) => {
    try{
        const newBook = await Book.create(req.body)
        res.status(200).json(newBook);

    } catch (error){
        res.status(500)
        throw new Error (error.message)
    }
}

//get all books
const getBooks = async(req, res) => {
  try{
    const books = await Book.find({});
    res.status(200).json(books);
      
  } catch (error){
    res.status(500)
    throw new Error (error.message)
  }
}

//get single book by id
const getBookByID = async(req, res) => {
  try{
    const {id} = req.params;
    const book = await Book.findById(id);
    res.status(200).json(book);
      
  } catch (error){
    res.status(500)
    throw new Error (error.message)
  }
}

//update a book by id
const updateBookbyID = async(req, res) => {
  try{
    const {id} = req.params;
    const book = await Book.findByIdAndUpdate(id, req.body);
    if (!book){
        res.status(500)
        throw new Error (`cannot find any user with ID ${id}`)
    }
    const updatedBook = await Book.findById(id);
    res.status(200).json(updatedBook);
      
  } catch (error){
    res.status(500)
    throw new Error (error.message)
  }
}

//delete a book by id
const deleteBook = async(req, res) => {
  try{
    const {id} = req.params;
    const book = await Book.findByIdAndDelete(id, req.body);
    if (!user){
      res.status(500)
      throw new Error (`cannot find any user with ID ${id}`)
    }
    res.status(200).json({ message: `${id} user deleted.`, book });
      
  } catch (error){
    res.status(500)
    throw new Error (error.message)
  }
}

module.exports = {
    getBooks,
    getBookByID,
    postBook,
    updateBookbyID,
    deleteBook
}
