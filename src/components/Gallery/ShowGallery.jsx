import React, { Component, createRef } from "react";
import { Container } from "react-bootstrap";
import { connect } from "react-redux";
import Fetching from "../Fetching";
import Moment from "react-moment";
import "moment-timezone";
import { galleryAction } from "../../actions";
// import Gallery from "react-grid-gallery";
import Gallery from "react-photo-gallery";
import Carousel, { Modal, ModalGateway } from "react-images";

import { getGalleryImage, getGalleryResizeImage, gcd } from "../../helpers";

export class ShowGallery extends Component {
  state = {
    viewerIsOpen: false,
    currentImage: 0
  };

  preRenderRef = createRef();

  componentDidMount() {
    const { id } = this.props.match.params;
    if (!id) return;
    this.props.fetchById(id);
  }

  openLightbox = (event, { photo, index }) => {
    this.setState({
      currentImage: index,
      viewerIsOpen: true
    });
  };

  closeLightbox = () => {
    this.setState({
      currentImage: 0,
      viewerIsOpen: false
    });
  };

  render() {
    const { viewerIsOpen, currentImage } = this.state;
    const { fetching, data, error } = this.props;
    const { id } = this.props.match.params;
    let imagesFull = [];
    const images =
      data &&
      data?.items?.length > 0 &&
      data.items.map((item, i) => {
        // const width = 0;
        // const height = 0;
        // const r = gcd (width, height);
        imagesFull.push({
          src: getGalleryImage(id, item.name)
          // width: 4,
          // height: 3
        });
        return {
          src: getGalleryResizeImage(id, item.name)
          // width: 4,
          // height: 3
        };
      });
    return (
      <>
        <Container className="mt-5">
          {error ? (
            <h5>{error}</h5>
          ) : fetching ? (
            <Fetching />
          ) : data ? (
            <>
              <h4 style={{ marginBottom: "0rem" }}>{data.title}</h4>
              <p style={{ marginBottom: "0rem" }}>{data.subtitle}</p>
              <footer className="blockquote-footer">
                <small className="text-muted">
                  <Moment fromNow>{data.created}</Moment>
                </small>
              </footer>
              <div className="gallery">
                {images?.length > 0 ? (
                  <Gallery photos={images} onClick={this.openLightbox} />
                ) : (
                  <h5 className="text-center mt-3">ไม่มีภาพ</h5>
                )}
              </div>
            </>
          ) : (
            <h5 className="text-center">Not found</h5>
          )}
        </Container>
        <ModalGateway>
          {viewerIsOpen ? (
            <Modal onClose={this.closeLightbox}>
              <Carousel
                currentIndex={currentImage}
                views={imagesFull.map((x) => ({
                  ...x,
                  srcset: x.srcSet,
                  caption: x.title
                }))}
              />
            </Modal>
          ) : null}
        </ModalGateway>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  const { fetching, data, error } = state.showGallery;
  console.log(data);
  return {
    fetching,
    data,
    error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchById: (id) => dispatch(galleryAction.fetchById(id))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowGallery);
