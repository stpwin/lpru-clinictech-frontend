import React, { Component } from "react";
import { Container } from "react-bootstrap";
import GalleryList from "./GalleryList"


export class GalleryPage extends Component {
  render() {
    return (
      <Container className='mt-5'>
        <h1 className='text-center'>ภาพกิจกรรม</h1>
        <hr />
        <div className='card-list' >
          <GalleryList className="mt-5" />
        </div>
      </Container>
    );
  }
}

export default GalleryPage;
