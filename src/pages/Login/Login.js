import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { userLogin } from "../../redux/action/action";
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
import "./Login.css";
import { useDispatch } from "react-redux";

const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const history = useHistory();
  const dispatch = useDispatch();

  const clearData = () => {
    setUser({
      email: "",
      password: "",
    });
  };

  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (!user.email || !user.password) {
      return;
    }
    // else if (
    //   user.email === "mansi@test.com" &&
    //   user.password === "mansi123"
    // ) {
    //   history.push("/admin");
    // }
    else {
      dispatch(userLogin(user.email, user.password));
      history.push("/");
    }
  };

  return (
    <Container className="pt-5">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card className="user_card">
            <CardBody>
              <form className="pt-3 pb-3" onSubmit={submitHandler}>
                <h1 className="form_header">Login</h1>
                <Row>
                  <Col sm={12} className="pb-3">
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
                  <Col sm={12} className="pb-3">
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
