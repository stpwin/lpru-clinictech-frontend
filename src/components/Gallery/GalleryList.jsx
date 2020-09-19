import React, { Component } from 'react'
import { GalleryItem } from "../Card/CardItem";
import Fetching from "../Fetching";
import EmptyItem from "../Card/EmptyItem";
import { connect } from "react-redux";
import { galleryAction } from "../../actions";
import { genGalleryLink } from "../../utils";

export class GalleryList extends Component {

  componentDidMount() {
    this.props.fetchAllGallery();
  }
  render() {
    const { fetching, data, error } = this.props;
    if (fetching) return <Fetching />;
    if (error) return <h1>Error</h1>;
    if (data) {
      if (data.length === 0) return <EmptyItem />;
      return (
        data &&
        data.map((item, i) => {
          const dataWithLink = { ...item, linkTo: genGalleryLink (item.id)};
          return (
            <GalleryItem
              className='p-3 card-item'
              key={`gallery-${i}`}
              {...dataWithLink}
            />
          );
        })
      );
    }
    return <EmptyItem />;
  }
}

const mapStateToProps = (state) => {
  const { fetching, data, error } = state.gallery;
  return {
    fetching,
    data,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllGallery: () => dispatch(galleryAction.fetchAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(GalleryList);