import React, { Component } from 'react'
import { GalleryItem } from "../Card/CardItem";

import galleryData from "../../gallery.json";

export class GalleryList extends Component {
  render() {
    return (
      galleryData &&
              galleryData.map((item, i) => {
                return (
                  <GalleryItem className='p-3' key={`gallery-${i}`} {...item} />
                );
              })
    )
  }
}

export default GalleryList
