import React, { Component } from 'react'

import { Accordion, Card, Button, Container} from "react-bootstrap";
import Personnel from './Personnel';

import Holder from "holderjs";

export class About extends Component {
  componentDidMount() {
    Holder.run({});
  }
  render() {
    return (
      <Container className="mt-5">
        <Accordion defaultActiveKey='0'>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='0'>
                <h5>ที่มาและความสำคัญ</h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='0'>
              <Card.Body><Provenance /></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='1'>
                <h5>วัตถุประสงค์</h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='1'>
              <Card.Body><Purpose /></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='2'>
                <h5>โครงสร้างเครือข่าย</h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='2'>
              <Card.Body><Connection /></Card.Body>
            </Accordion.Collapse>
          </Card>
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} variant='link' eventKey='3'>
                <h5>บุคลากร</h5>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey='3'>
              <Card.Body>
                <Personnel />
              </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      </Container>
    );
  }
}

const Provenance = ({ }) => {
  return (
    <>
      <p>
        <span className='ml-5'> </span> มหาวิทยาลัยราชภัฏลำปาง
        เป็นสถานศึกษาในพื้นที่จังหวัดลำปาง
        ที่มุ่งเน้นการพัฒนาท้องถิ่นและเป็นที่พึ่งของสังคมภายใต้การกำหนดปรัชญาที่ว่า
        "มหาวิทยาลัยเพื่อการพัฒนาท้องถิ่น"
        จึงมีภารกิจทางด้านการบริการวิชาการแก่สังคมในด้านต่าง ๆ อาทิเช่น
        การให้ความรู้ทางวิทยาการและเทคโนโลยีสมัยใหม่
        การเผยแพร่ความรู้ทางด้านวิทยาศาสตร์เทคโนโลยีและนวัตกรรมที่ชุมชนสามารถนำไปใช้ในชีวิทประจำวัน
        หรือการนำไปประกอบอาชีพทั้งที่เป็นอาชีพหลักและอาชีพเสริม
        ตลอดจนการนำองค์ความรู้ไปช่วยแก้ปัญหาของท้องถิ่น
        โดยประชาชนในพื้นที่ส่วนใหญ่จะมีความเห็นตรงกนว่ามหาวิทยาลัยฯ
        เป็นแหล่งบริการวิชาการด้านต่าง ๆ ที่มีความพร้อมทั้งด้านบุคลากร
        อุปกรณ์เครื่องมือต่าง ๆ ที่จะสามารถถ่ายทอด และให้บริการแก่ประชาชนได้
      </p>
      <p>
        <span className='ml-5'> </span>{" "}
        <span className='font-weight-bolder'>
          คลินิกเทคโนโลยี เครือข่ายมหาวิทยาลัยราชภัฏลำปาง
        </span>{" "}
        โดยคณะวิทยาศาสตร์ มหาวิทยาลัยราชภัฏลำปาง
        จึงเป็นหน่วยงานที่จัดตั้งขึ้นเพื่อดำเนินงานภายใต้ภารกิจการให้คำปรึกษา
        การบริการวิชาการในมิติทางด้านวิทยาศาสตร์และเทคโนโลยีตามนโยบายของมหาวิทยาลัยฯ
        และรองรับภารกิจในการถ่ายทอดเทคโนโลยี
        ตามแผนปฏิบัติการภารกิจกิจกรรมส่งเสริมการนำวิทยาศาสตร์ เทคโนโลยี
        และนวัตกรรมเพื่อเพิ่มศักยภาพภาคการผลิตและเศรษฐกิจชุมชน
        ตลอดจนเป็นช่องทางการให้ประชาชนได้เข้าถึงการให้บริการข้อมูลข่าวสารได้อย่างทั่วถึง
      </p>
      <p>
        <span className='ml-5'> </span> ดังนั้น การจัดตั้งคลินิกเทคโนโลยี
        เครือข่ายมหาวิทยาลัยราชภัฏลำปาง
        เพื่อให้ดำเนินการเผยแพร่ความรู้ทางด้านวิทยาศาสตร์ เทคโนโลยีและนวัตกรรม
        จึงมีความสำคัญและควรได้รับการสนับสนุนอย่างต่อเนื่อง
        เพราะจะเป็นจุดเริ่มต้นที่จะดำเนินกิจกรรมอื่น ๆ
        รวมทั้งเพื่อสร้างความเข้าใจและความเชื่อมโยงการบริการงานคลินิกเทคโนโลยี
        ก่อให้เกิดประโยชน์สูงสุดแก่กลุ่มเป้าหมายต่าง ๆ
        ทั้งสถานศึกษาที่เป็นเครือข่าย และระหว่างเครือข่าย โรงเรียน
        องค์การบริหารส่วนท้องถิ่น และประชนชนในเขตพื้นที่จังหวัดลำปาง
      </p>
    </>
  );
}

const Purpose = ({ }) => {
  return (
    <>
      <p>
        1) เพื่อเป็นแหล่งรวบรวมข้อมูลและให้บริการคำปรึกษาและข้อมูลทางเทคโนโลยี
      </p>
      <p>
        2) เพื่อเป็นตัวกลางและประสานการถ่ายทอดความรู้และเทคโนโลยีร่วมกันระหว่างเครือข่าย
      </p>
      <p>
        3) เพื่อเป็นหน่วยสนับสนุนงานด้านวิทยาศาสตร์ เทคโนโลยีและนวัตกรรมในพื้นที่จังหวัด
      </p>
    </>
  );
}

const Connection = ({ }) => {
  return <>
    ชุมชน กลุ่มเกษตรกร กลุ่มหมู่บ้าน กลุ่มวิสาหกิจชมุชน กลุ่มโอทอป (OTOP) โรงเรียน และประชาชนทั่วไป ตลอดจนกลุ่มนักเรียน นักศึกษา หน่วยงานราชการ องค์การบริหารส่วนตำบลต่าง ๆ ในเขตจังหวัดลำปางและจังหวัดใกล้เคียง จำนวน 200 คน
  </>
}

export default About
