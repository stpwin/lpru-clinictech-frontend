import React, { Component } from 'react'
import { ListGroup } from 'react-bootstrap'
import { FaPhone, FaFax, FaEnvelope, FaHome, FaFacebook } from "react-icons/fa";

export class Contact extends Component {
  render() {
    return (
      <div>
        <ListGroup variant='flush'>
          <ListGroup.Item>
            <FaPhone />{" "}
            <a href='tel:054-241052' target='_blank' rel='noopener noreferrer'>
              054-241052
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaFax />{" "}
            <a href='fax:054-241052' target='_blank' rel='noopener noreferrer'>
              054-241052
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaEnvelope />{" "}
            <a
              href='mailto:love_na_ant@hotmail.com'
              target='_blank'
              rel='noopener noreferrer'
            >
              love_na_ant@hotmail.com
            </a>
          </ListGroup.Item>
          <ListGroup.Item>
            <FaFacebook />{" "}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.facebook.com/%E0%B8%84%E0%B8%A5%E0%B8%B4%E0%B8%99%E0%B8%B4%E0%B8%81%E0%B9%80%E0%B8%97%E0%B8%84%E0%B9%82%E0%B8%99%E0%B9%82%E0%B8%A5%E0%B8%A2%E0%B8%B5-%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C-%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A0%E0%B8%B1%E0%B8%8F%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87-104275917949273/'
            >
              คลินิกเทคโนโลยี คณะวิทยาศาสตร์ มหาวิทยาลัยราชภัฏลำปาง
            </a>{" "}
          </ListGroup.Item>
          <ListGroup.Item>
            <FaHome />{" "}
            <a
              target='_blank'
              rel='noopener noreferrer'
              href='https://www.google.com/maps/place/%E0%B8%84%E0%B8%93%E0%B8%B0%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A8%E0%B8%B2%E0%B8%AA%E0%B8%95%E0%B8%A3%E0%B9%8C+%E0%B8%A1%E0%B8%AB%E0%B8%B2%E0%B8%A7%E0%B8%B4%E0%B8%97%E0%B8%A2%E0%B8%B2%E0%B8%A5%E0%B8%B1%E0%B8%A2%E0%B8%A3%E0%B8%B2%E0%B8%8A%E0%B8%A0%E0%B8%B1%E0%B8%8F%E0%B8%A5%E0%B8%B3%E0%B8%9B%E0%B8%B2%E0%B8%87/@18.2331495,99.4858671,289m/data=!3m1!1e3!4m5!3m4!1s0x30d96a4c29efa357:0x99dfc987ccd7b13a!8m2!3d18.2331759!4d99.4861539'
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
