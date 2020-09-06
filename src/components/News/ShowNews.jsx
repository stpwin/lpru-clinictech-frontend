import React, { Component } from 'react'

export class ShowNews extends Component {
  render() {
    const { id: paramid } = this.props.match.params;
    return (
      <div>
        <h1 className='text-center'>News id: {paramid}</h1>
      </div>
    );
  }
}

export default ShowNews
