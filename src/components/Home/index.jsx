import React, { Component } from 'react'
import { Carousel } from 'react-bootstrap'
import Holder from "holderjs";
import News from './News';
import Activities from './Activities'

export class Home extends Component {
  componentDidMount() {
    Holder.run({});
  }
  render() {
    return (
      <>
        <Carousel>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/1920x400?text= &bg=373940'
              alt='First slide'
            />
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/1920x400?text= &bg=282c34'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className='d-block w-100'
              src='holder.js/1920x400?text= &bg=20232a'
              alt='Third slide'
            />

            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        
        <News />
        <Activities />
        

      </>
    );
  }
}

export default Home
