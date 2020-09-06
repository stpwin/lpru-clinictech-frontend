import React, { Component } from 'react'

import { Scrollbars } from "react-custom-scrollbars";
import { Container } from "react-bootstrap";
import CardItem from "./CardItem";
import { Link } from "react-router-dom";

export class Activities extends Component {
  render() {
    return (
      <Container>
        <h1 className='text-center mt-5'>ภาพกิจกรรม</h1>
        <div className='float-right'>
          <Link to='/Gallery'>แสดงทั้งหมด</Link>
        </div>
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
    );
  }
}

const GalleryItem = ({}) => <CardItem />;


export default Activities;
