import React, { Component } from "react";
import { NewsItem } from "../Card/CardItem";
import Fetching from "../Fetching";
import EmptyItem from "../Card/EmptyItem";
import { genNewsLink } from "../../utils";
import { getNewsImage } from "../../helpers";

import { connect } from "react-redux";
import { newsAction } from "../../actions";

export class NewsList extends Component {
  state = {
    news: [],
    done: false
  };

  componentDidMount() {
    this.props.fetchAllNews();
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
          console.log(item);
          const dataWithLink = {
            ...item,
            linkTo: genNewsLink(item.id),
            thumdbImg: item.thumdbImg && getNewsImage(item.thumdbImg)
          };
          return <NewsItem key={`news-${i}`} {...dataWithLink} />;
        })
      );
    }
    return <EmptyItem />;
  }
}

const mapStateToProps = (state) => {
  const { fetching, data, error } = state.news;
  return {
    fetching,
    data,
    error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllNews: () => dispatch(newsAction.fetchAll())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);
