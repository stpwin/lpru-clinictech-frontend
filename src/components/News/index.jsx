import React, { Component } from 'react'
import { Container } from 'react-bootstrap'
import NewsList from './NewsList'

export class News extends Component {
  render() {
    return (
      <Container className='mt-5'>
        <h1 className='text-center'>News</h1>
        <NewsList />
      </Container>
    );
  }
}

export default News
