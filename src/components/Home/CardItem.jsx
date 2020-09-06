import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

export class CardItem extends Component {
  render() {
    return (
      <Card style={{ width: "15rem" }}>
        <Card.Img variant='top' src='holder.js/100px150' />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <LinkContainer to='/News/135'>
            <Button className='btn-xs' variant='primary'>
              อ่านต่อ
            </Button>
          </LinkContainer>

          <Card.Text>
            <small className='text-muted'>Last updated 3 mins ago</small>
          </Card.Text>
        </Card.Body>
        {/* <Card.Footer className='text-muted'>2 days ago</Card.Footer> */}
      </Card>
    );
  }
}

export default CardItem
