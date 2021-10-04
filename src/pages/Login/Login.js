import React, { useState } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
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

const Login = () => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const clearData = () => {
    setUser({
      username: "",
      password: "",
    });
  };

  return (
    <Container className="pt-5">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card>
            <CardBody>
              <form className="pt-3 pb-3" onSubmit={submitHandler}>
                <h1 className="form_header">Login</h1>
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
                  <Col sm={12} className="pt-4">
                    <Link to="/signup" className="reg_link">
                      Don't have an account
                    </Link>
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

export default Login;
