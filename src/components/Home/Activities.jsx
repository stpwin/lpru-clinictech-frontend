import React, { Component } from 'react'

import { Scrollbars } from "react-custom-scrollbars";
import { Container } from "react-bootstrap";
import CardItem from "./CardItem";

export class Activities extends Component {
  render() {
    return (
        <>
        <h1 className='text-center mt-5'>ภาพกิจกรรม</h1>
        <Container>
          <Scrollbars autoHeight autoHeightMin={350} autoHeightMax={350}>
            <div className='card-slide'>
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
              <GalleryItem />
            </div>
          </Scrollbars>
        </Container>
      </>
    );
  }
}

const GalleryItem = ({}) => {
  return <CardItem />;
};


export default Activities;
