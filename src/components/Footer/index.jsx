import React, { Component } from "react";

import { Container, Row, Col, Spinner } from "react-bootstrap";

import Contact from "./Contact";
import Ask from "./Ask";

import { getWebContact, sendAsk } from "../../firebaseApp";

export class Footer extends Component {
  state = {
    fetchDone: false
  };
  componentDidMount() {
    getWebContact().then((data) => {
      this.setState({
        ...data,
        fetchDone: true
      });
    });
  }
  render() {
    const {
      footerText,
      fetchDone,
      email,
      facebook,
      facebookName,
      fax,
      place,
      placeName,
      tel
    } = this.state;
    return (
      <footer>
        <Container className="py-5">
          <Row>
            <Col>
              <h5>คลินิกเทคโนโลยี มหาวิทยาลัยราชภัฏลำปาง</h5>
              {fetchDone ? (
                <p>{footerText}</p>
              ) : (
                <Spinner animation="border" variant="danger" />
              )}
            </Col>
            <Col>
              <h5>ติดต่อ</h5>
              {fetchDone ? (
                <Contact
                  email={email}
                  facebook={facebook}
                  facebookName={facebookName}
                  fax={fax}
                  place={place}
                  placeName={placeName}
                  tel={tel}
                />
              ) : (
                <Spinner animation="border" variant="danger" />
              )}
            </Col>
            <Col>
              <h5>สอบถาม</h5>
              <Ask sendMessage={sendAsk} />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer;
