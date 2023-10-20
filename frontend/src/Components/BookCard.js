import React from 'react'

import { Card } from 'react-bootstrap'

function BookCard({ id,title, author, price, stock, imageSrc }) {
  return (
    <>
      <Card style={{ width: '8rem' }}>
        <Card.Img variant="top" src="" alt={title}/>
        <Card.Body>
          <Card.Link href="{id}">{id}</Card.Link>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{author}</Card.Text>
          <Card.Text>Rs.{price} | {stock}</Card.Text>
        </Card.Body>
      </Card>
    </>
  )
}

export default BookCard
