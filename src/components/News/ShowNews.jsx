import React, { Component } from 'react'
import { Container } from 'react-bootstrap';
import Fetching from "../Fetching";
import { getNewsById } from '../../api'
import Moment from "react-moment";
import "moment-timezone";
import ReactHtmlParser from "react-html-parser";

export class ShowNews extends Component {
  state = {
    newsData: {},
    done: false,
    fail: false
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    if (!id) return;
    getNewsById(id).then(newsData => {
      this.setState({
        done: true,
        newsData
      })
    }).catch(err => {
      this.setState({
        fail: true
      })
    });
    
  }
  render() {
    const { newsData, done, fail } = this.state;
    return (
      <Container className='mt-5'>
        {fail ? (
          <h5>FAIL</h5>
        ) : done ? (
          <>
            <h4 style={{ marginBottom: "0rem" }}>{newsData.title}</h4>
            <p className='text-muted font-weight-light'>
              <Moment fromNow>{newsData.created}</Moment>
            </p>
            <NewsContent data={newsData} />
          </>
        ) : (
          <Fetching />
        )}
      </Container>
    );
  }
}

const NewsContent = ({data}) => {
  return (
    <>
      <div>{ReactHtmlParser(data.content)}</div>
      {/* <p>{data.content}</p> */}
    </>
  );
}

export default ShowNews
