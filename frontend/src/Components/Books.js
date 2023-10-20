import React, { useEffect, useState } from 'react'

import { Col } from 'react-bootstrap'

import BookCard from './BookCard'

function Books() {

  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/api/books')
      .then((response) => response.json())
      .then((data) => {
        console.log(data); 
        setBooks(data);
      })
      .catch((error) => {
        console.error('Error fetching books:', error);
      });
  }, []);  

  return (
    <>
      {books.map((book) => (
        <Col lg='3' className='mb-4' key={book._id}>
          <BookCard Book={book}/>
        </Col>
      ))}
    </>
  )
}

export default Books
