import React, { Component } from 'react'

import { CardColumns, Card, ListGroup } from "react-bootstrap";
import { FaEnvelope, FaPhone, FaFax, FaMapMarkerAlt } from 'react-icons/fa'

import crew from "./crew"

const groups = crew.reduce((acc, curr) => {
  if (!acc[curr.showLevel]) acc[curr.showLevel] = []; //If this type wasn't previously stored
  acc[curr.showLevel].push(curr);
  return acc;
}, {});

export class Personnel extends Component {
  state = {
    groups: groups,
  };
  render() {
    return (
      <div>
        {Object.keys(this.state.groups).map(i => {
          return <PersonelGroup key={`group-${i}`} group={this.state.groups[i]} />;
        })}
      </div>
    );
  }
}

const PersonelGroup = ({ group }) => {
  return (
    <>
      <CardColumns>
        {group && group.length === 1 ? <p></p> : null}
        {group &&
          group.map((item, i) => {
            return <PersonnelItem key={`person-${i}`} data={item} />;
          })}
      </CardColumns>
      <p className='mt-5'></p>
    </>
  );
}

const PersonnelItem = ({ data: { name, image, clinicPosition, position, contact } }) => {
  return (
    <Card>
      {image ? (
        <Card.Img variant='top' src={image} />
      ) : (
        <Card.Img
          variant='top'
          src='https://via.placeholder.com/160?text=no image'
        />
      )}

      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text className='mb-0'>{clinicPosition}</Card.Text>
        {position ? (
          <Card.Text className='mb-0'>{`(${position})`}</Card.Text>
        ) : null}
      </Card.Body>
      <ListGroup variant='flush'>
        <ListGroup.Item>
          <FaEnvelope />{" "}
          <a
            className='small font-weight-light'
            href={`mailto:${contact && contact.email}`}
          >
            {contact && contact.email}
          </a>
        </ListGroup.Item>
        <ListGroup.Item>
          <FaPhone />{" "}
          <span className='small font-weight-light'>
            {contact && contact.phone ? (
              <a href={`tel:${contact.phone}`}>{contact.phone}</a>
            ) : null}
          </span>
        </ListGroup.Item>
        <ListGroup.Item>
          <FaFax />{" "}
          <span className='small font-weight-light'>
            {contact && contact.fax ? (
              <a href={`fax:${contact.fax}`}>{contact.fax}</a>
            ) : null}
          </span>
        </ListGroup.Item>
        <ListGroup.Item>
          <FaMapMarkerAlt />{" "}
          <span className='small font-weight-light'>
            {contact && contact.place}
          </span>
        </ListGroup.Item>
      </ListGroup>
    </Card>
  );
};

export default Personnel
