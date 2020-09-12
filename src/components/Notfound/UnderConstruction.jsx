import React, { Component } from 'react'
import {Container} from 'react-bootstrap'

export class UnderConstruction extends Component {
  render() {
    return (
      <Container style={{ height: "200px" }} className='mt-5'>
        <h5 className='text-center p-5 text-danger'>Under construction!</h5>
      </Container>
    );
  }
}

export default UnderConstruction
