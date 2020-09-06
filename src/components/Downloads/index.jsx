import React, { Component } from 'react'
import { Table, Container, Button } from 'react-bootstrap'
import { FaDownload } from 'react-icons/fa'

import downloadData from "./downloads.json"

export class Downloads extends Component {
  render() {
    return (
      <Container>
        {downloadData && downloadData.map((item, i) => {
          return <DownloadGroup key={`download-group-${i}`} data={item} />;
        })}
      </Container>
    );
  }
}

const gotoDownload = (url) => {
  // console.log(url)
  window.open(url, "_blank");
  // window.location.assign(url);
};

const DownloadButton = ({ url }) => (
  <Button
    className='btn-xs'
    variant='success'
    onClick={() => gotoDownload(url)}
  >
    <FaDownload />
  </Button>
);

const FileItem = ({ index, fileName, url }) => (
  <tr>
    <td>{index}</td>
    <td>{fileName}</td>
    <td>
      <DownloadButton url={url} />
    </td>
  </tr>
);

const DownloadGroup = ({ data: { title, files } }) => {
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
          {files && files.length > 0 ? (
            files.map((file, i) => {
              return <FileItem key={`file-${i}`} index={i + 1} fileName={file.name} url={file.url} />;
            })
          ) : (
            <tr>
              <td colSpan={3} className="text-center">ไม่มีไฟล์</td>
            </tr>
          )}
        </tbody>
      </Table>
    </>
  );
}

export default Downloads
