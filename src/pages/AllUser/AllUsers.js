import React, { useEffect } from "react";
import { Container, Card, Button, CardTitle, CardText } from "reactstrap";
import { loadUsers, userDelete } from "../../redux/action/action";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import "./AllUsers.css";

const Allusers = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { currentUser } = useSelector((state) => state.user);

  console.log("All Users compo", currentUser);

  useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  const deleteHandler = (id) => {
    dispatch(userDelete(id));
    dispatch(loadUsers());
  };

  return (
    <div>
      {currentUser &&
        currentUser.map((userData, index) => (
          <Container>
            <Card key={index} className="user_card mt-5 mb-5">
              <CardTitle className="cardtitle" tag="h5">
                <h1>User Information</h1>
              </CardTitle>
              <CardText>
                <h2>{index + 1}</h2>
                <h3>Email: {userData.email}</h3>
                <h4>User Name: {userData.username}</h4>
                <Button
                  className="btn_edit"
                  onClick={() => history.push(`/edituser/${userData.id}`)}
                >
                  Edit
                </Button>
                <Button
                  className="btn_delete"
                  onClick={() => deleteHandler(userData.id)}
                >
                  Delete
                </Button>
              </CardText>
            </Card>
          </Container>
        ))}
    </div>
  );
};

export default Allusers;
