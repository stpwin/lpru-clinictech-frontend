import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import NewsList from './NewsList'

export class News extends Component {
  render() {
    return (
      <Container className='mt-5'>
        <h1 className='text-center'>ข่าวประชาสัมพันธ์</h1>
        <hr />
        <div class='card-list'>
          <NewsList className="card-item"/>
        </div>
      </Container>
    );
  }
}

export default News
