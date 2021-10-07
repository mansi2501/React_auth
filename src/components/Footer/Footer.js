import React from "react";
import { Col, Container, Row } from "reactstrap";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaInstagramSquare,
  FaWhatsappSquare,
  FaYoutubeSquare,
} from "react-icons/fa";
import "./Footer.css";

const Footer = () => {
  return (
    <Container className="footer" fluid={true}>
      <Row>
        <Col md={6} className="footer_about">
          <h5>About Us</h5>
          <p className="about_info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni
            tempora laboriosam nostrum commodi ab neque, dicta ipsum animi qui
            facilis eligendi itaque, ipsa necessitatibus dolore autem molestiae
            voluptatum. Nihil, vero.
          </p>
        </Col>
        <Col md={6}>
          <h5>Follow Us On</h5>
          <p>
            <FaFacebookSquare className="icon" />
            <FaLinkedin className="icon" />
            <FaInstagramSquare className="icon" />
            <FaWhatsappSquare className="icon" />
            <FaYoutubeSquare className="icon" />
          </p>
        </Col>
      </Row>
      <p>
        Copyright © 2021 All rights reserved | This is done by{" "}
        <span className="myname">Mansi Trivedi</span>
      </p>
    </Container>
  );
};

export default Footer;
