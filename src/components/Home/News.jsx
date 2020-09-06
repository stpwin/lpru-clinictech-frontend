import React, { Component } from 'react'

// import CustomScroll from "react-custom-scroll";
import { Scrollbars } from "react-custom-scrollbars";
import {Container} from 'react-bootstrap'
import CardItem from './CardItem';
import { Link } from 'react-router-dom';

export class News extends Component {
  render() {
    return (
      <div>
        <Container>
          <h1 className='text-center mt-5'>ข่าวประชาสัมพันธ์</h1>
          <div className='float-right'>
            <Link to="/News">แสดงทั้งหมด</Link>
          </div>
          <br></br>
          <Scrollbars autoHeight autoHeightMin={350} autoHeightMax={350}>
            <div className='card-slide'>
              <NewsItem />
              <NewsItem />
              <NewsItem />
              <NewsItem />
              <NewsItem />
              <NewsItem />
              <NewsItem />
            </div>
          </Scrollbars>
        </Container>
      </div>
    );
  }
}

const NewsItem = ({ }) => {
  return (
    <CardItem />
  );
}

export default News
