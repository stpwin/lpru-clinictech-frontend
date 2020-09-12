import React, { Component } from 'react'
import { Carousel } from "react-bootstrap";

import logo from "./AAAAA.png";

export class Slide extends Component {

  render() {
    return (
      <Carousel>
        <SlideItem
          title='First'
          subtitle='aaaaaaaaaaaaaaa'
          image='https://avatars3.githubusercontent.com/u/3021693'
        />
        <SlideItem
          title='Second'
          subtitle='Lorem ipsum dolor sit amet, consectetur adipiscing elit.'
          image={logo}
        />
        <SlideItem
          title='Third'
          subtitle='Praesent commodo cursus magna, vel scelerisque nisl consectetur.'
          image={logo}
        />
      </Carousel>
    );
  }
}

const SlideItem = ({title, subtitle, image}) => {
  return (
    <Carousel.Item>
      {image ? (
        <img className='d-block w-100' src={image} alt={title}/>
      ) : (
        <img
          className='d-block w-100'
          src='holder.js/1920x400?text= &bg=373940'
          alt={title}
        />
      )}
      <Carousel.Caption>
        <h3>{title}</h3>
        <p>{subtitle}</p>
      </Carousel.Caption>
    </Carousel.Item>
  );
}

export default Slide
