import React, { Component } from 'react'

import { CardColumns, Card } from 'react-bootstrap'

export class Personnel extends Component {
  render() {
    return (
      <div>
        <CardColumns>
          <p></p>
          <PersonnelItem />
        </CardColumns>
        <p className='mt-5'></p>
        <CardColumns>
          <PersonnelItem />
          <PersonnelItem />
        </CardColumns>
        <p className='mt-5'></p>
        <CardColumns>
          <PersonnelItem />
          <PersonnelItem />
          <PersonnelItem />
          <PersonnelItem />
          <PersonnelItem />
        </CardColumns>
        <p className='mt-5'></p>
        <CardColumns>
          <PersonnelItem />
          <PersonnelItem />
          <PersonnelItem />
        </CardColumns>
      </div>
    );
  }
}

const PersonnelItem = ({ }) => {
  return (
    <Card>
      <Card.Img variant='top' src='holder.js/100px160' />
      <Card.Body>
        <Card.Title>ผศ.ดร.วารุณี อริยวิริยะนันท์</Card.Title>
        <Card.Text>ผู้อำนวยการคลินิกเทคโนโลยี</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Personnel
