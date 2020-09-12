import React, { Component } from 'react'
import {Spinner} from 'react-bootstrap'

export class Fetching extends Component {
  render() {
    return (
      <div className='text-center mt-5' style={{ width: "100%" }}>
        <Spinner animation='border' className='text-center' />
      </div>
    );
  }
}

export default Fetching
