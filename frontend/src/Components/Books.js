import React from 'react'

import { Col } from 'react-bootstrap'

import BookCard from './BookCard'

function Books() {
  return (
    <div>
        {/* <Col lg='3' className='mb-4' key={Product._id}> */}
        <Col lg='3' className='mb-4'>
                    {/* <BookCard Product={Product}/> */}
                    <BookCard/>
                </Col>
    </div>
  )
}

export default Books
