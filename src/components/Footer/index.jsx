import React, { Component } from 'react'

import { Container, Row, Col } from 'react-bootstrap'

import Contact from './Contact'
import Ask from './Ask'

export class Footer extends Component {
  render() {
    return (
      <footer>
        <Container className='py-5'>
          <Row>
            <Col>
              <h5>คลินิกเทคโนโลยี มหาวิทยาลัยราชภัฏลำปาง</h5>
              <p>
                มหาวิทยาลัยราชภัฏลำปาง ได้จัดตั้ง "คลินิกเทคโนโลยี
                มหาวิทยาลัยราชภัฏลำปาง" ขึ้น เพื่อให้คำปรึกษา เผยแพร่ข่าวสาร
                ถ่ายทอด พัฒนาและปรับปรุง
                เกี่ยวกับเทคโนโลยีด้านต่าง ๆ ที่มี
                ให้กับชุมชนท้องถิ่นในจังหวัดลำปาง และพื้นที่ใกล้เคียง
                ดังปรัชญาที่ว่า "มหาวิทยาลัยเพื่อการพัฒนาท้องถิ่น"
              </p>
            </Col>
            <Col>
              <h5>ติดต่อ</h5>
              <Contact />
            </Col>
            <Col>
              <h5>สอบถาม</h5>
              <Ask />
            </Col>
          </Row>
        </Container>
      </footer>
    );
  }
}

export default Footer
