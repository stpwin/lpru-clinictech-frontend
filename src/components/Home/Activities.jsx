import React, { Component } from 'react'

import { Scrollbars } from "react-custom-scrollbars";
import { Container } from "react-bootstrap";

import { Link } from "react-router-dom";

import GalleryList from "../Gallery/GalleryList";

export class Activities extends Component {
  render() {
    return (
      <Container>
        <h1 className='text-center mt-5'>ภาพกิจกรรม</h1>
        <div className='float-right'>
          <Link to='/Gallery'>แสดงทั้งหมด</Link>
        </div>
        <Scrollbars autoHeight autoHeightMin={40} autoHeightMax={450}>
          <div className='card-slide'>
            <GalleryList />
          </div>
        </Scrollbars>
      </Container>
    );
  }
}




export default Activities;
