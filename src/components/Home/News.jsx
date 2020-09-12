import React, { Component } from 'react'

// import CustomScroll from "react-custom-scroll";
import { Scrollbars } from "react-custom-scrollbars";
import {Container} from 'react-bootstrap'

import { Link } from 'react-router-dom';
import NewsList from '../News/NewsList';

export class News extends Component {
  render() {
    return (
        <Container>
          <h1 className='text-center mt-5'>ข่าวประชาสัมพันธ์</h1>
          <div className='float-right'>
            <Link to='/news'>แสดงทั้งหมด</Link>
          </div>
          <br></br>
          <Scrollbars autoHeight autoHeightMin={400} autoHeightMax={450}>
            <div className='card-slide'>
              <NewsList />
            </div>
          </Scrollbars>
        </Container>
    );
  }
}

export default News
