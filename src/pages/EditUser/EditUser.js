import React, { useEffect, useState } from "react";
import "./EditUser.css";
import { useDispatch, useSelector } from "react-redux";
import { EditUserData } from "../../redux/action/action";
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
import { getSingleUser, loadUsers } from "../../redux/action/action";
import { useParams, useHistory } from "react-router";

const EditUser = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { id } = useParams();
  const { currentUser } = useSelector((state) => state.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const clearData = () => {
    setUser({
      username: "",
      email: "",
      password: "",
    });
  };

  useEffect(() => {
    dispatch(getSingleUser(id));
  }, []);

  useEffect(() => {
    if (currentUser) {
      setUser({ ...currentUser });
    }
  }, [currentUser]);

  const changeHandler = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    dispatch(EditUserData(id, user));
    dispatch(loadUsers());
    history.push("/allusers");
  };

  return (
    <Container className="pt-5">
      <Row>
        <Col sm="12" md={{ size: 6, offset: 3 }}>
          <Card className="user_card">
            <CardBody>
              <form className="pb-3" onSubmit={submitHandler}>
                <h1 className="form_header">Edit User Information</h1>
                <Row>
                  <Col sm={12} className="pb-3">
                    <FormGroup>
                      <Label for="username">User Name</Label>
                      <Input
                        type="text"
                        name="username"
                        value={user.username || ""}
                        onChange={changeHandler}
                        placeholder="Enter Username"
                        id="username"
                        required
                      />
                    </FormGroup>
                  </Col>
                  <Col sm={12} className="pb-3">
                    <FormGroup>
                      <Label for="email">Email</Label>
                      <Input
                        type="email"
                        name="email"
                        value={user.email || ""}
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
                        value={user.password || ""}
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
                          <Button className="btn_submit">Update</Button>
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

export default EditUser;
