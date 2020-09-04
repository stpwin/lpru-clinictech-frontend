import React, { Component } from 'react'

import { Accordion, Card, Button, Container} from "react-bootstrap";
import Personnel from './Personnel';

import Holder from "holderjs";

export class About extends Component {
  componentDidMount() {
    Holder.run({});
  }
  render() {
    return (
      <Container>
        <h1 className='text-center mt-5'>About</h1>
        <Accordion defaultActiveKey='3'>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                <h5>ที่มาและความสำคัญ</h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                <h5>วัตถุประสงค์</h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                <h5>โครงสร้างเครือข่าย</h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='2'>
              <Card.Body>Hello! I'm another body</Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='3'>
                <h5>บุคลากร</h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='3'>
              <Card.Body>
                <Personnel />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
  }
}

export default About
