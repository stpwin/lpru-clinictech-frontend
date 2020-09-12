import React, { Component } from 'react'
import { Card, Button } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import Moment from "react-moment";
import "moment-timezone";

// // Sets the moment instance to use.
// Moment.globalMoment = moment;
 
// // Set the locale for every react-moment instance to French.
// Moment.globalLocale = 'fr';
 
// // Set the output format for every react-moment instance.
// Moment.globalFormat = 'D MMM YYYY';
 
// // Set the timezone for every instance.
// Moment.globalTimezone = 'America/Los_Angeles';
 
// // Set the output timezone for local for every instance.
// Moment.globalLocal = true;
 
// // Use a <span> tag for every react-moment instance.
// Moment.globalElement = 'span';

export class CardItem extends Component {
  render() {
    const {
      title,
      subtitle,
      thumdbImg, seeMoreButtonText,
      linkTo,
      created,
      imageCount
    } = this.props;
    return (
      <Card style={{ width: "15rem" }}>
        {thumdbImg ? (
          <Card.Img variant='top' src={thumdbImg} />
        ) : (
          <Card.Img variant='top' src='https://via.placeholder.com/450' />
        )}
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{subtitle}</Card.Text>
          {linkTo ? (
            <LinkContainer to={linkTo}>
              <Button className='btn-xs' variant='primary'>
                {seeMoreButtonText || "อ่านต่อ"}
              </Button>
            </LinkContainer>
          ) : null}

          {imageCount ? (
            <Card.Text className='text-muted mt-1'>{imageCount} ภาพ</Card.Text>
          ) : null}

          {created ? (
            <footer className='blockquote-footer'>
              <small className='text-muted'>
                <Moment fromNow>{created}</Moment>
              </small>
            </footer>
          ) : null}
        </Card.Body>
      </Card>
    );
  }
}

const GalleryItem = (props) => (
  <CardItem seeMoreButtonText='ดูรูปเพิ่มเติม' {...props} />
);

const NewsItem = (props) => {
  return <CardItem  {...props} />;
};

export default CardItem
export { GalleryItem, NewsItem };