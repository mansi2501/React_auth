import React from "react";
import { Col, Container, Row } from "reactstrap";
import banner_img from "../../main_head.png";
import "./Home.css";

const Home = () => {
  return (
    <Container className="bgcolor" fluid={true}>
      <Row>
        <Col md={6} sm={12}>
          <img src={banner_img} alt="Banner" width={900} />
        </Col>
        <Col md={6} sm={12} className="banner_data">
          <h1>
            Welcome To <br />
            My Site
          </h1>
        </Col>
      </Row>
    </Container>
  );
};

export default Home;
