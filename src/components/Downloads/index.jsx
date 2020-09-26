import React, { Component } from 'react'
import { Table, Container, Button } from 'react-bootstrap'
import { FaDownload } from 'react-icons/fa'
import Fetching from "../Fetching";
import EmptyItem from "../Card/EmptyItem";
import FailItem from "../Card/FailItem";
import { connect } from "react-redux";
import { downloadsAction } from "../../actions";

export class Downloads extends Component {

  componentDidMount() {
    this.props.fetchAllDownloads();
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
          <DownloadList downloads={data} />
        ) : (
          <h5 className='text-center'>ไม่มีข้อมูล</h5>
        )}
      </Container>
    );
  }
}

const DownloadList = ({ downloads }) => {

    if (downloads.length === 0) return <EmptyItem />;
    return (
        <>
        {downloads &&
          downloads.map((item, i) => {
            return <DownloadGroup key={`download-group-${i}`} data={item} />;
          })}
        </>
      );

}

const DownloadButton = ({ fileName, url }) => (
  <Button
    as='a'
    className='btn-xs'
    variant='success'
    href={`${url}`}
    download={`${fileName}`}
    target="_blank"
    // onClick={() => gotoDownload(url)}
  >
    <FaDownload />
  </Button>
);

const FileItem = ({ index, fileName, url }) => (
  <tr>
    <td>{index}</td>
    <td>{fileName}</td>
    <td>
      <DownloadButton fileName={fileName} url={url} />
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

const mapStateToProps = (state) => {
  const { fetching, data, error } = state.downloads;
  return {
    fetching,
    data,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchAllDownloads: () => dispatch(downloadsAction.fetchAll()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Downloads);
