import React, { Component } from 'react'
import { connect } from "react-redux";
import { askAction } from "../../actions";

import { Form, Button } from "react-bootstrap";

export class Ask extends Component {
  state = {
    name: "",
    email: "",
    body: ""
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  handleSubmit = () => {
    const { name, email, body } = this.state;
    this.props.sendAsk(name, email, body);
  }
  render() {
    const { name, email, body } = this.state
    const { fetching, data, error} = this.props
    return (
      <div>
        <Form>
          <Form.Group controlId='exampleForm.ControlInput1'>
            <Form.Control
              type='text'
              name='name'
              placeholder='ชื่อ-สกุล'
              value={name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlInput2'>
            <Form.Control
              type='email'
              name='email'
              placeholder='อีเมล'
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Control
              as='textarea'
              name='body'
              rows={3}
              placeholder='พิมพ์ข้อความ'
              maxLength={500}
              value={body}
              onChange={this.handleChange}
            />
          </Form.Group>

          <Form.Group controlId='exampleForm.ControlTextarea1'>
            <Form.Text className='text-danger'>
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          {error ? (
            <Button variant='primary' size='sm' onClick={this.handleSubmit}>
              ส่งข้อความอีกครั้ง
            </Button>
          ) : fetching ? (
            <Button variant='primary' size='sm' disabled={true}>
              กำลังส่งข้อความ
            </Button>
          ) : data ? (
            <Button variant='primary' size='sm' disabled={true}>
              ส่งข้อความแล้ว
            </Button>
          ) : (
            <Button variant='primary' size='sm' onClick={this.handleSubmit}>
              ส่งข้อความ
            </Button>
          )}
        </Form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { fetching, data, error } = state.ask;
  return {
    fetching,
    data,
    error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendAsk: (name, email, body) =>
      dispatch(askAction.sendAsk(name, email, body)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Ask);