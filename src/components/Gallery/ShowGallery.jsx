import React, { Component, createRef } from "react";
import { Container, Image } from 'react-bootstrap';
import { Lightbox } from "react-modal-image";
import { connect } from "react-redux";
import Fetching from "../Fetching";
import Moment from "react-moment";
import "moment-timezone";
import { galleryAction } from "../../actions";

export class ShowGallery extends Component {
  state = {
    open: false,
    currentImage: "https://via.placeholder.com/1000",
  };

  preRenderRef = createRef();

  componentDidMount() {
    const { id } = this.props.match.params;
    if (!id) return;
    this.props.fetchById(id);
  }

  closeLightbox = () => {
    this.setState({ open: false });
  };
  openLightbox = (largeImage) => {
    this.setState({ currentImage: largeImage }, () => {
      this.setState({ open: true });
    });
  };

  render() {
    const { fetching, data, error } = this.props;
    return (
      <>
        <Container className='mt-5'>
          {error ? (
            <h5>{error}</h5>
          ) : fetching ? (
            <Fetching />
          ) : data ? (
            <>
              <h4 style={{ marginBottom: "0rem" }}>{data.title}</h4>
              <p style={{ marginBottom: "0rem" }}>{data.subtitle}</p>
              <footer className='blockquote-footer'>
                <small className='text-muted'>
                  <Moment fromNow>{data.created}</Moment>
                </small>
              </footer>

              <div className='d-inline-flex flex-wrap justify-content-center'>
                {data.images &&
                  data.images.map((item, i) => {
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
            </>
          ) : (
            <h1>No data to display</h1>
          )}
        </Container>
        <img
          ref={this.preRenderRef}
          className='pre-render'
          alt='temporary'
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

const mapStateToProps = (state) => {
  const { fetching, data, error } = state.showGallery;
  return {
    fetching,
    data,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchById: (id) => dispatch(galleryAction.fetchById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowGallery);
