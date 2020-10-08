import React, { Component } from "react";
import { Form, Button } from "react-bootstrap";

export class Ask extends Component {
  state = {
    name: "",
    email: "",
    body: "",
    fetching: false,
    data: "",
    error: "",
    sent: false
  };

  handleChange = (e) => {
    this.setState({
      sent: false,
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = () => {
    const { name, email, body } = this.state;
    this.setState({
      fetching: true,
      error: "",
      data: "",
      sent: false
    });
    this.props
      .sendMessage(name, email, body)
      .then((res) => {
        // console.log(res);
        this.setState({
          fetching: false,
          data: res,
          sent: true,
          name: "",
          email: "",
          body: ""
        });
      })
      .catch((err) => {
        // console.warn(err);
        this.setState({
          fetching: false,
          error: { message: "ผิดพลาด" } || err
        });
      });
  };

  render() {
    const { sent, name, email, body, fetching, error } = this.state;
    return (
      <div>
        <Form autoComplete="off">
          <Form.Group>
            <Form.Control
              disabled={fetching}
              type="text"
              name="name"
              placeholder="ชื่อ-สกุล"
              value={name}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              disabled={fetching}
              type="email"
              name="email"
              placeholder="อีเมล"
              value={email}
              onChange={this.handleChange}
            />
          </Form.Group>
          <Form.Group>
            <Form.Control
              disabled={fetching}
              as="textarea"
              name="body"
              rows={3}
              placeholder="พิมพ์ข้อความ"
              maxLength={500}
              value={body}
              onChange={this.handleChange}
            />
            {error ? (
              <Form.Text className="text-danger">{error.message}</Form.Text>
            ) : null}
          </Form.Group>
          {error ? (
            <Button variant="primary" size="sm" onClick={this.handleSubmit}>
              ส่งข้อความอีกครั้ง
            </Button>
          ) : fetching ? (
            <Button variant="primary" size="sm" disabled={true}>
              กำลังส่งข้อความ
            </Button>
          ) : sent ? (
            <Button variant="primary" size="sm" disabled={true}>
              ส่งข้อความแล้ว
            </Button>
          ) : (
            <Button
              variant="primary"
              size="sm"
              onClick={this.handleSubmit}
              disabled={!name || !email || !body}
            >
              ส่งข้อความ
            </Button>
          )}
        </Form>
      </div>
    );
  }
}

export default Ask;
