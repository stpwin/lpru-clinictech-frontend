import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import { FaPhone, FaFax, FaEnvelope, FaHome, FaFacebook } from "react-icons/fa";

export class Contact extends Component {
  render() {
    const { email, facebook, fax, place, tel } = this.props;
    return (
      <div>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <FaPhone />{" "}
            <a href={`tel:${tel}`} target='_blank' rel='noopener noreferrer'>
              {tel}
              {/* 054-241052 */}
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaFax />{" "}
            <a href={`fax:${fax}`} target='_blank' rel='noopener noreferrer'>
              {fax}
              {/* 054-241052 */}
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaEnvelope />{" "}
            <a
              href={`mailto:${email}`}
              target='_blank'
              rel='noopener noreferrer'
            >
              {email}
              {/* love_na_ant@hotmail.com */}
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaFacebook />{" "}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={facebook}
            >
              คลินิกเทคโนโลยี คณะวิทยาศาสตร์ มหาวิทยาลัยราชภัฏลำปาง
            </a>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHome />{" "}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href={place}
            >
              คณะวิทยาศาสตร์ มหาวิทยาลัยราชภัฏลำปาง 119 ม.9 ต.ชมพู อ.เมือง
              จ.ลำปาง 52100
            </a>
          </ListGroup.Item>
        </ListGroup>
      </div>
    );
  }
}

export default Contact
