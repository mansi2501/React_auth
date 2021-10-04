import axios from "axios";
import "./SignUp.css";
import React, { useState } from "react";
import {
  Card,
  Col,
  Container,
  Row,
  CardBody,
  FormGroup,
  Label,
  Input,
  Button,
} from "reactstrap";

const SignUp = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const clearData = () => {
    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const userInfo = {
      username: user.username,
      email: user.email,
      password: user.password,
    };

    axios.post("http://localhost:4000/users", userInfo).then((res) => {
      console.log("Data Inserted");
      clearData();
    });
  };

  return (
    <Container className="pt-5">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card>
            <CardBody>
              <form className="pb-3" onSubmit={submitHandler}>
                <h1 className="form_header">Registration</h1>
                <Row>
                  <Col sm={12}>
                    <FormGroup>
                      <Label for="username">User Name</Label>
                      <Input
                        type="text"
                        name="username"
                        value={user.username}
                        onChange={changeHandler}
                        placeholder="Enter Username"
                        id="username"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12}>
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={changeHandler}
                        placeholder="Enter Email"
                        id="email"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12}>
                    <FormGroup>
                      <Label for="password">Password</Label>
                      <Input
                        type="password"
                        name="password"
                        value={user.password}
                        onChange={changeHandler}
                        placeholder="Enter Password"
                        id="password"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} className="pt-3">
                    <FormGroup>
                      <Row>
                        <Col sm={6}>
                          <Button className="btn_submit">Submit</Button>
                        </Col>
                        <Col sm={6}>
                          <Button onClick={clearData} className="btn_cancel">
                            Cancel
                          </Button>
                        </Col>
                      </Row>
                    </FormGroup>
                  </Col>
                </Row>
              </form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default SignUp;
