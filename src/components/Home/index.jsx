import React, { Component } from 'react'

// import Slide from './Slide'
import News from './News';
import Activities from './Activities'

export class Home extends Component {

  render() {
    return (
      <>
        {/* <Slide /> */}
        <News />
        <Activities />
      </>
    );
  }
}

export default Home
