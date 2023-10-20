import React from 'react'

import { Card } from 'react-bootstrap'

function BookCard() {
  return (
    <div>
      <Card style={{ width: '8rem' }}>
            <Card.Img variant="top" src="" />
            <Card.Body>
                <Card.Link href="#">Card Link</Card.Link>
                <Card.Text>     QUANTITY </Card.Text>
                <Card.Text> this.. </Card.Text>
            </Card.Body>
        </Card>
    </div>
  )
}

export default BookCard
