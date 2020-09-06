import React, { Component } from 'react'

import { Form, Button } from "react-bootstrap";

export class Ask extends Component {
  render() {
    return (
      <div>
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
            <Form.Control as='textarea' rows={3} placeholder='พิมพ์ข้อความ' />
          </Form.Group>
          <Button variant='primary' type='submit' size="sm">
            ส่งข้อความ
          </Button>
        </Form>
      </div>
    );
  }
}

export default Ask
