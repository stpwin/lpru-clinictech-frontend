import React, { Component } from 'react'
import { Table, Container, Button } from 'react-bootstrap'
import {FaDownload} from 'react-icons/fa'

export class Downloads extends Component {
  render() {
    return (
      <Container>
        <DownloadGroup title='หัวข้อกลุ่มดาวน์โหลด 1' />
        <DownloadGroup title='หัวข้อกลุ่มดาวน์โหลด 2' />
        <DownloadGroup title='หัวข้อกลุ่มดาวน์โหลด 3' />
        <DownloadGroup title='หัวข้อกลุ่มดาวน์โหลด 4' />
      </Container>
    );
  }
}

const DownloadButton = ({ }) => <Button className="btn-xs" variant="success"><FaDownload /></Button>

const FileItem = ({ index, fileName }) => (
  <tr>
    <td>{index}</td>
    <td>{fileName}</td>
    <td>
      <DownloadButton />
    </td>
  </tr>
);

const DownloadGroup = ({title }) => {
  return (
    <>
      <h5 className='mt-5'>{title}</h5>
      <Table striped bordered hover size='sm'>
        <thead>
          <tr>
            <th style={{ width: "2.5rem" }}>#</th>
            <th>ชื่อไฟล์</th>
            <th style={{ width: "0.5rem" }}></th>
          </tr>
        </thead>
        <tbody>
            <FileItem index='1' fileName='file-1.pdf' />
            <FileItem index='2' fileName='access.log' />
            <FileItem index='3' fileName='report.xlsx' />
        </tbody>
      </Table>
    </>
  );
}

export default Downloads
