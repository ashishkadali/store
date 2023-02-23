import React, { Component } from "react";
import "../Login/Register.scss";
import axios from "axios";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      password: "",
      confirmPassword: "",
      status: false,
      errorMessage: "",
    };
  }

  handelChange = (e) => {
    const a = e.target.name;
    const b = e.target.value;
    this.setState({
      [a]: b,
    });
  };

  submit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("http://localhost:5001/register", {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        confirmPassword: this.state.confirmPassword,
      });
      console.log(response.data);
    } catch (err) {
      console.log(err.response.data);
    }
  };

  render() {
    return (
      <>
        <Container>
          <Row>
            <Col className=" hideing Sigin__container__image"></Col>
            <Col className="Sigin__container__form">
              <h1>Create Account</h1>
              <Form style={{ width: "100%" }}>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control
                    type="text"
                    onChange={(e) => this.handelChange(e)}
                    placeholder="Enter Name"
                    name="username"
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control
                    type="Email"
                    onChange={(e) => this.handelChange(e)}
                    placeholder="Enter Email"
                    name="email"
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="Password"
                    onChange={(e) => this.handelChange(e)}
                    placeholder="Enter Password"
                    name="password"
                    required
                  />
                </Form.Group>

                <Form.Group>
                  <Form.Label>Confirm Password</Form.Label>
                  <Form.Control
                    type="Password"
                    onChange={(e) => this.handelChange(e)}
                    placeholder="Enter Confirm Password"
                    name="confirmPassword"
                    required
                  />
                </Form.Group>

                <Button type="submit" style={{ margin: "10px" }}>
                  sign-in
                </Button>

                <p>
                  If you have account <Link to="/login">Login</Link>
                </p>
              </Form>
            </Col>
          </Row>
        </Container>
        {/* <center> */}
        {/* <p>Welcom to watch store </p>
        <p>Please register here</p>
        <div className="registerContainer">
          <form
            name="registerForm"
            onSubmit={(e) => this.submit(e)}
            // action="/login"
            className="registerSecondContainer"
          >
            <input
              type="text"
              onChange={(e) => this.handelChange(e)}
              placeholder="Enter Name"
              name="username"
              required
            ></input>
            <input
              type="email"
              placeholder="Enter email"
              name="email"
              onChange={(e) => this.handelChange(e)}
              required
            ></input>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={(e) => this.handelChange(e)}
              required
            ></input>
            <input
              type="password"
              placeholder="Renter Password"
              name="confirmPassword"
              onChange={(e) => this.handelChange(e)}
              required
            ></input>
            <input type="submit" value="submit"></input>
          </form>
        </div> */}
        {/* </center> */}
      </>
    );
  }
}
