import React, { Component } from 'react'
import { Container, Media } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa'
import Holder from 'holderjs'
import Fetching from "../Fetching";
import EmptyItem from "../Card/EmptyItem";

import { getSpecialist } from "../../api";

export class Specialist extends Component {
  state = {
    specialist: [],
    done: false
  }
  componentDidMount() {
    getSpecialist().then(specialist => {
      this.setState({
        done: true,
        specialist
      }, () => {
          Holder.run({});
      });
    });
    
  }
  render() {
    const { done, specialist } = this.state;
    if (done) {
      if (specialist.length === 0) return <EmptyItem />;
      return (
        <div>
          <Container className='my-5'>
            <h4>รายการ</h4>
            <hr />
            <MediaList data={specialist} />
          </Container>
        </div>
      );
    }
    return <Fetching />;
  }
}

const MediaList = ({ data }) => {
  return (
    <>
      {data && data.map((data, i) => {
        return data && data.title ? <MediaItem key={`mediaitem-${i}`} data={data} /> : null;
      })}
    </>
  );
}

const MediaItem = ({ data: { title, image, description, owner } }) => {
  return (
    <>
      <Media as='li' className='mb-3'>
        {image ? (
          <img
            width={64}
            height={64}
            className='mr-3'
            src={image}
            alt='Generic placeholder'
          />
        ) : (
          <img
            width={96}
            height={96}
            className='mr-3'
            src='holder.js/96x96?text=no image'
            alt='Generic placeholder'
          />
        )}
        <Media.Body>
          <h5>{title}</h5>
            <p className='mb-0'>รายละเอียดเทคโนโลยีที่ให้บริการ</p>
            {description &&
              description.map((item, i) => {
                return (
                  <p key={`desc=${i}`} className='mb-0 ml-2 font-weight-light'>
                    - {item}
                  </p>
                );
              })}
          <p className='mb-0 mt-2'>เจ้าของเทคโนโลยี</p>
          <div className='owner'>
            <div className='d-inline-flex flex-wrap'>
              {owner &&
                owner.map((owner, i) => {
                  return <Owner key={`owner-${i}`} data={owner} />;
                })}
            </div>
          </div>
        </Media.Body>
      </Media>
      <hr />
    </>
  );
};

const Owner = ({ data: { image, name, phone, email, place } }) => {
  return (
    <div className='p-2'>
      <Media>
        {image ? (
          <img
            width={64}
            height={64}
            className='mr-3'
            src={image}
            alt='Generic placeholder'
          />
        ) : (
          <img
            width={64}
            height={64}
            className='mr-3'
            src='holder.js/64x64?text=no image'
            alt='Generic placeholder'
          />
        )}
        <Media.Body>
          <h5 className='small'>{name}</h5>
          <p className='mb-0 font-weight-light small'>
            <FaPhone />{" "}
            <a href={`tel:${phone}`} target='_blank' rel='noopener noreferrer'>
              {phone}
            </a>
          </p>
          <p className='mb-0 font-weight-light small'>
            <FaEnvelope />{" "}
            <a
              href={`mailto:${email}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {email}
            </a>
          </p>
          <p className='mb-0 font-weight-light small'>
            <FaMapMarkerAlt /> {place}
          </p>
        </Media.Body>
      </Media>
    </div>
  );
}

export default Specialist
