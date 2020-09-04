import React, { Component } from 'react'

// import CustomScroll from "react-custom-scroll";
import { Scrollbars } from "react-custom-scrollbars";
import {Container} from 'react-bootstrap'
import CardItem from './CardItem';

export class News extends Component {
  render() {
    return (
      <div>
        <h1 className='text-center mt-5'>ข่าวประชาสัมพันธ์</h1>
        <Container>
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
