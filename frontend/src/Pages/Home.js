import React from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import {Form, Stack, Table, Badge, Button} from 'react-bootstrap';
import InputGroup from 'react-bootstrap/InputGroup';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faQrcode, faCirclePlus, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import Books from '../Components/Books';

const style = {
    div: {
        margin: "10px 0",
        padding: "5px",
    },
    background: {
        bgColor: "White"
    },
    title: {
        color: "blue",
        textAlign: "center"
    },
    icon:{
        color: "#ddd4d4"
    },
    table: {
        border: "0"
    },
    row: {
        padding: "25px"
    },
    badge: {
        width: "150px",
        textAlign: "left"
    },
    bigBadge: {
        width: "200px",
        textAlign: "left"
    },
    topButton: {
        width: "100px",
        textAlign: "left",
        color: "black"
    },
    bottomButton: {
        width: "100px",
        textAlign: "left",
    },
    downloadIcon:{
        color: "#black"
    },
}

function Home() {
  return (
    <div style={style.div}>
      
      <Container>
        <Row>
            <h3 style={style.title}>STOREMATE</h3>
        </Row>

        <Row>
            <Col style={style.background}  xs={7}>
                <Stack  className="mb-3" direction="horizontal" gap={3}>

                    <InputGroup>
                    <InputGroup.Text> <FontAwesomeIcon icon={faUser} style={style.icon} /> </InputGroup.Text>
                    <Form.Select aria-label="Default select example">
                    <option>Please select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                    <InputGroup.Text> <FontAwesomeIcon icon={faCirclePlus} style={style.icon} /> </InputGroup.Text>
                    </InputGroup>

                    <InputGroup>
                    <InputGroup.Text> <FontAwesomeIcon icon={faQrcode} style={style.icon} /> </InputGroup.Text>
                    <Form.Select aria-label="Default select example">
                    <option>Please select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                    <InputGroup.Text> <FontAwesomeIcon icon={faCirclePlus} style={style.icon} /> </InputGroup.Text>
                    </InputGroup>

                </Stack>

                <Stack  className="mb-4" direction="horizontal" gap={3}>
                    <InputGroup>
                    <Form.Select aria-label="Default select example">
                    <option>Please select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                    </InputGroup>

                    <InputGroup>
                    <Form.Select aria-label="Default select example">
                    <option>Please select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                    </InputGroup>

                    <InputGroup>
                    <Form.Select aria-label="Default select example">
                    <option>Please select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                    </InputGroup>
                </Stack>

                <Table style={style.table}>
                    <thead>
                        <tr>
                        <th>PRODUCT</th>
                        <th>QUANTITY</th>
                        <th>UNIT PRICE</th>
                        <th>LINE PRICE</th>
                        </tr>
                    </thead>
                    <tbody>
                        
                    </tbody>
                    </Table>

            </Col>

            <Col>
                <Stack  className="mb-3" direction="horizontal" gap={3}>
                    <InputGroup>
                    <Form.Select aria-label="Default select example">
                    <option>Please select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                    </InputGroup>

                    <InputGroup>
                    <Form.Select aria-label="Default select example">
                    <option>Please select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                    </InputGroup>

                    <InputGroup>
                    <Form.Select aria-label="Default select example">
                    <option>Please select</option>
                    <option value="1">One</option>
                    <option value="2">Two</option>
                    <option value="3">Three</option>
                    </Form.Select>
                    </InputGroup>
                </Stack>

                <Books/>

            </Col>

        </Row>

        <Row className="fixed-bottom" style={style.row}>

            <Col xs={7}>
                <Stack  className="mb-3" direction="horizontal" gap={3}>
                    <h4><Badge bg="primary" style={style.badge}>New Button</Badge></h4>
                    <h4><Badge bg="primary" style={style.badge}>Discount</Badge></h4>
                    <h4><Badge bg="primary" style={style.badge}>Tax</Badge></h4>
                </Stack>
                <Stack  className="mb-3" direction="horizontal" gap={3}>
                    <h4><Badge bg="primary" style={style.badge}>New Button</Badge></h4>
                    <h4><Badge bg="primary" style={style.badge}>Shipping</Badge></h4>
                    <h4><Badge bg="primary" style={style.badge}>Packaging</Badge></h4>
                    <h4><Badge bg="primary" style={style.bigBadge}>Total</Badge></h4>
                </Stack>
            </Col>

            <Col>
                <Stack  className="mb-3" direction="horizontal" gap={3}>
                    <Button variant="success" style={style.topButton}><FontAwesomeIcon icon={faArrowDown} style={style.downloadIcon} /> Cash</Button>
                    <Button variant="warning" style={style.topButton}><FontAwesomeIcon icon={faArrowDown} style={style.downloadIcon} /> Pay</Button>
                    <Button variant="warning" style={style.topButton}><FontAwesomeIcon icon={faArrowDown} style={style.downloadIcon} /> Card</Button>
                    <Button variant="warning" style={style.topButton}><FontAwesomeIcon icon={faArrowDown} style={style.downloadIcon} /> Credit</Button>
                </Stack>

                <Stack  className="mb-3" direction="horizontal" gap={3}>
                    <Button variant="primary" style={style.bottomButton}>Button</Button>
                    <Button variant="primary" style={style.bottomButton}>Button</Button>
                    <Button variant="primary" style={style.bottomButton}>Button</Button>
                    <Button variant="primary" style={style.bottomButton}>Button</Button>
                </Stack>
            </Col>
        </Row>

      </Container>

    </div>
  )
}

export default Home
