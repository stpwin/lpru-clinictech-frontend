import React, { Component } from 'react'
import {Spinner} from 'react-bootstrap'

export class Fetching extends Component {
  render() {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" className="text-center" />
        {/* <h1 className="text-center">Fetching</h1> */}
      </div>
    )
  }
}

export default Fetching
