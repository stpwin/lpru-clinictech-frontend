import React, { Component } from 'react'
import { GalleryItem } from "../Card/CardItem";
import Fetching from "../Fetching";
import EmptyItem from "../Card/EmptyItem";
import { getGalleryList } from "../../api";

export class GalleryList extends Component {
  state = {
    gallery: [],
    done: false
  }
  componentDidMount() {
    getGalleryList().then(gallery => {
      this.setState({
        done: true,
        gallery
      })
    });
  }
  render() {
    const { done, gallery } = this.state;
    if (done) {
      if (gallery.length === 0) return <EmptyItem />;
      return (
        gallery &&
        gallery.map((item, i) => {
          return (
            <GalleryItem
              className='p-3 card-item'
              key={`gallery-${i}`}
              {...item}
            />
          );
        })
      );
    }
    return <Fetching />;
  }
}

export default GalleryList
