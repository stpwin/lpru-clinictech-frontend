import React, { Component } from 'react'

import { Container, Row, Col, ListGroup, Form, Button } from 'react-bootstrap'

import {FaPhone, FaFax, FaEnvelope, FaHome} from 'react-icons/fa'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Container className='py-5'>
          <Row>
            <Col>
              <h5>คลินิกเทคโนโลยี มหาวิทยาลัยราชภัฏลำปาง</h5>
              <p>
                ด้วยความร่วมมือระหว่างกระทรวงวิทยาศาสตร์และเทคโนโลยี
                และมหาวิทยาลัยราชภัฏลำปาง ได้จัดตั้ง "คลินิกเทคโนโลยี
                มหาวิทยาลัยราชภัฏลำปาง" ขึ้น เพื่อให้คำปรึกษา เผยแพร่ข่าวสาร
                สาธิต ฝึกอบรม ถ่ายทอด พัฒนาและปรับปรุง
                เกี่ยวกับเทคโนโลยีด้านต่างๆ ที่มี
                ให้กับชุมชนท้องถิ่นในจังหวัดลำปาง และพื้นที่ใกล้เคียง
                ดังคำขวัญที่ว่า "คลินิกเทคโนโลยี ที่พึ่งของชุมชน"
              </p>
            </Col>
            <Col>
              <h5>ติดต่อ</h5>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <FaPhone /> Cras justo odio
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaFax /> Dapibus ac facilisis in
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaEnvelope /> Morbi leo risus
                </ListGroup.Item>
                <ListGroup.Item>
                  <FaHome /> Porta ac consectetur ac
                </ListGroup.Item>
              </ListGroup>
            </Col>
            <Col>
              <h5>สอบถาม</h5>
              <Form>
                <Form.Group controlId='exampleForm.ControlInput1'>
                  {/* <Form.Label>ชื่อ-สกุล</Form.Label> */}
                  <Form.Control type='text' placeholder='ชื่อ-สกุล' />
                </Form.Group>
                <Form.Group controlId='exampleForm.ControlInput2'>
                  {/* <Form.Label>อีเมล</Form.Label> */}
                  <Form.Control type='email' placeholder='อีเมล' />
                </Form.Group>
                <Form.Group controlId='exampleForm.ControlTextarea1'>
                  {/* <Form.Label>ข้อความ</Form.Label> */}
                  <Form.Control
                    as='textarea'
                    rows={3}
                    placeholder='พิมพ์ข้อความ'
                  />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  ส่งข้อความ
                </Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer
