import React, { Component, createRef } from "react";
import { Container, Image } from 'react-bootstrap';
import Holder from "holderjs"

import { Lightbox } from "react-modal-image";

import imagesData from "../../mock/gallery-1.json"

export class ShowGallery extends Component {
  state = {
    open: false,
    currentImage: "holder.js/1000x1000",
  };

  preRenderRef = createRef();

  componentDidMount() {
    Holder.run({});
  }
  closeLightbox = () => {
    this.setState({ open: false });
  };
  openLightbox = (largeImage) => {
    // console.log(e.target)
    this.setState({currentImage: largeImage }, () => {
      Holder.run({ images: ".pre-render" });
      this.setState({ open: true });
    });
  };

  render() {
    const { id: galleryId } = this.props.match.params;
    return (
      <>
        <Container className='mt-5'>
          <h1 className='text-center'>Gallery id: {galleryId}</h1>
          <div className='d-inline-flex flex-wrap justify-content-center'>
            {imagesData &&
              imagesData.map((item, i) => {
                return (
                  <Image
                    key={`image-${i}`}
                    className='p-3'
                    src={item.thumb}
                    onClick={() => this.openLightbox(item.img)}
                  />
                );
              })}
          </div>
        </Container>
        <img
          ref={this.preRenderRef}
          className='pre-render'
          src={this.state.currentImage}
          style={{ display: "none" }}
        />
        {this.state.open && (
          <Lightbox
            medium={this.preRenderRef.current.src}
            large={this.preRenderRef.current.src}
            // alt='Hello World!'
            onClose={this.closeLightbox}
          />
        )}
      </>
    );
  }
}

export default ShowGallery
