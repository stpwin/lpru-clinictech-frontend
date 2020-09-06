import React, { Component } from "react";
import { Container } from "react-bootstrap";
import GalleryList from "./GalleryList"


export class GalleryPage extends Component {
  render() {
    return (
      <Container className='mt-5'>
        <h1 className='text-center'>Gallery</h1>
        <hr />
        <div className='d-inline-flex flex-wrap justify-content-center'>
          <GalleryList />
        </div>
      </Container>
    );
  }
}

export default GalleryPage;
