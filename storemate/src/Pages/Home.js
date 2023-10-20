import React from 'react'

import Form from 'react-bootstrap/Form'
import InputGroup from 'react-bootstrap/InputGroup'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faUser} from '@fortawesome/free-solid-svg-icons'

const style = {
    title: {
        color: "blue",
        textAlign: "center"
    },
}

function Home() {
  return (
    <div>
      <h3 style={style.title}>STOREMATE</h3>

      <InputGroup className="mb-3">
        <InputGroup.Text><FontAwesomeIcon icon={faUser} style={{color: "#ddd4d4",}} /></InputGroup.Text>
        <Form.Control aria-label="Amount (to the nearest dollar)" />
        <InputGroup.Text>+</InputGroup.Text>
      </InputGroup>

    </div>
  )
}

export default Home
