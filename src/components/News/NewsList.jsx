import React, { Component } from 'react'
import { NewsItem } from "../Card/CardItem";

import newsData from "../../news.json"

export class NewsList extends Component {
  render() {
    return newsData && newsData.map((item, i) => {
      return <NewsItem key={`news-${i}`} {...item} />
    })
  }
}

export default NewsList
