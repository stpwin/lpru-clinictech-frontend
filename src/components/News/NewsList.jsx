import React, { Component } from 'react'
import { NewsItem } from "../Card/CardItem";
import Fetching from "../Fetching"
import EmptyItem from "../Card/EmptyItem"

import { getNewsList } from "../../api";

export class NewsList extends Component {
  state = {
    news: [],
    done: false
  }

  componentDidMount() {
    getNewsList().then(news => {
      this.setState({
        done: true,
        news
      })
    });
  }

  render() {
    const { done, news } = this.state;
    if (done) {
      if (news.length === 0) return <EmptyItem />
        return (
          news &&
          news.map((item, i) => {
            return <NewsItem key={`news-${i}`} {...item} />;
          })
        );
    } 
    return <Fetching />
    
  }
}

export default NewsList
