import React from "react";
import "./Home.css";
import { Col, Container, Row } from "reactstrap";
import banner_img from "../../main_head.png";

const Home = () => {
  return (
    <Container className="bgcolor" fluid={true}>
      <Row>
        <Col md={6}>
          <img src={banner_img} alt="Banner" />
        </Col>
        <Col md={6}></Col>
      </Row>
    </Container>
  );
};

export default Home;
