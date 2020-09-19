import React, { Component } from 'react'
import { connect } from "react-redux";
import { specialistAction } from "../../actions";
import { Container, Media } from "react-bootstrap";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaUser } from 'react-icons/fa'
import Fetching from "../Fetching";
import EmptyItem from "../Card/EmptyItem";
import FailItem from "../Card/FailItem";

export class Specialist extends Component {
  componentDidMount() {
    this.props.fetchAll();
  }
  render() {
    const { fetching, data, error } = this.props;
    return (
      <Container className='mt-5'>
        {error ? (
          <FailItem />
        ) : fetching ? (
          <Fetching />
        ) : data ? (
          <SpecialistWrapper specialist={data} />
        ) : (
          <h5 className="text-center">ไม่มีข้อมูล</h5>
        )}
      </Container>
    );
  }
}

const SpecialistWrapper = ({ specialist }) => {
    if (specialist.length === 0) return <EmptyItem />;
    return (
      <>
          <h4>รายการ</h4>
          <hr />
          <MediaList data={specialist} />
      </>
    );
};

const MediaList = ({ data }) => {
  return (
    <>
      {data && data.map((data, i) => {
        return data && data.title ? <MediaItem key={`mediaitem-${i}`} data={data} /> : null;
      })}
    </>
  );
}

const MediaItem = ({ data: { title, thumbnail, describe, owner } }) => {
  return (
    <>
      <Media as='li' className='mb-3'>
        {thumbnail ? (
          <img
            width={64}
            height={64}
            className='mr-3'
            src={thumbnail}
            alt='placeholder'
          />
        ) : (
          <img
            width={96}
            height={96}
            className='mr-3'
            src='https://via.placeholder.com/150?text=no image'
            alt='placeholder'
          />
        )}
        <Media.Body>
          <h5>{title}</h5>
          <p className='mb-0'>รายละเอียดเทคโนโลยีที่ให้บริการ</p>
          {describe &&
            describe.map((item, i) => {
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
  if (!name) return <div className='p-2'>-</div>;
    return (
      <div className='p-2'>
        <Media>
          {image ? (
            <img
              width={64}
              height={64}
              className='mr-3'
              src={image}
              alt='placeholder'
            />
          ) : (
            <img
              width={64}
              height={64}
              className='mr-3'
              src='https://via.placeholder.com/150?text=no image'
              alt='placeholder'
            />
          )}
          <Media.Body>
            <FaUser /> <span className='small'>{name}</span>
            <p className='mb-0 font-weight-light small'>
              <FaPhone />{" "}
              <a
                href={`tel:${phone}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {phone || "-"}
              </a>
            </p>
            <p className='mb-0 font-weight-light small'>
              <FaEnvelope />{" "}
              <a
                href={`mailto:${email}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                {email || "-"}
              </a>
            </p>
            <p className='mb-0 font-weight-light small'>
              <FaMapMarkerAlt /> {place || "-"}
            </p>
          </Media.Body>
        </Media>
      </div>
    );
}

const mapStateToProps = (state) => {
  const { fetching, data, error } = state.specialist;
  return {
    fetching,
    data,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAll: () => dispatch(specialistAction.fetchAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Specialist);
