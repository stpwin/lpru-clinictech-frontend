import React, { Component } from 'react'
import { Container } from 'react-bootstrap';

export class ShowNews extends Component {
  render() {
    const { id: paramid } = this.props.match.params;
    return (
      <Container className="mt-5">
        <h1 className='text-center'>News id: {paramid}</h1>
      </Container>
    );
  }
}

export default ShowNews
