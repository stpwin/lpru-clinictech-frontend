import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Fetching from "../Fetching";
import Moment from "react-moment";
import "moment-timezone";
import ReactHtmlParser from "react-html-parser";

import { connect } from "react-redux";
import { newsAction } from "../../actions";


export class ShowNews extends Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    if (!id) return;
    this.props.fetchById(id);
  }
  render() {
    const { fetching, data, error } = this.props;

    return (
      <Container className='mt-5'>
        {error ? (
          <h5>{error}</h5>
        ) : fetching ? (
          <Fetching />
        ) : data ? (
          <>
            <h4 style={{ marginBottom: "0rem" }}>{data.title}</h4>
            {/* <p style={{ marginBottom: "0rem" }}>{data.subtitle}</p> */}
            <footer className='blockquote-footer'>
              <small className='text-muted'>
                <Moment fromNow>{data.created}</Moment>
              </small>
            </footer>
            {/* <p className='text-muted font-weight-light'>
              <Moment fromNow>{data.created}</Moment>
            </p> */}
            <NewsContent data={data} />
          </>
        ) : (
          <h5 className="text-center">Not found</h5>
        )}
      </Container>
    );
  }
}

const NewsContent = ({data}) => {
  return (
    <>
      <div>{ReactHtmlParser(data.content)}</div>
    </>
  );
}

const mapStateToProps = (state) => {
  const { fetching, data, error } = state.showNews;
  return {
    fetching,
    data,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchById: (id) => dispatch(newsAction.fetchById(id)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ShowNews);
