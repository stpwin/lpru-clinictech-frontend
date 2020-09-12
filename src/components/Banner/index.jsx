import React, { Component } from 'react';

import './index.css'
import BannerImage from "./lpru-clinictech-banner.svg";

class Banner extends Component {
  render() {
    return (
      <div className='banner'>
        <img src={BannerImage} alt='LPRU CLINIC TECHNOLOGY' />
        {/* <h1 className="neon">CLINIC TECHNOLOGY</h1> */}
      </div>
    );
  }
}

export default Banner;