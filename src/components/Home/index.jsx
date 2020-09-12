import React, { Component } from 'react'

import Holder from "holderjs";
import Slide from './Slide'
import News from './News';
import Activities from './Activities'

export class Home extends Component {
  componentDidMount() {
    Holder.run({});
  }
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
