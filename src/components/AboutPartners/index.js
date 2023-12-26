import React from "react";
import "./style.css";
import microsoftLogo from "../assets/images/microsoft-logo-with-name.png";
import { Image, Row, Col, Container } from "react-bootstrap";

const index = () => {
  return (
    <>
      <div className=" bg-dark ">
        <Container className="bg-dark text-white d-flex flex-column align-items-center justify-content-center p-5 gap-5 ">
          <p className="h2 aboutPartner-heading">Our Exclusive Partners.</p>

          <Row className="justify-content-between mt-5 gap-4 partners-res">
            <Col className="borderEnd">
              <Image
                src={microsoftLogo}
                alt="microsoft-logo-name"
                className=" pe-5 "
              />
              <hr className="Partners-hrline" />
            </Col>
            <Col>
              <p>
                It’s hard to imagine a world completely <br />
                disconnected from one of Microsoft’s devices,
                <br /> platforms, or initiatives.
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <Row className="clr-strip ">
        <Col className="blue-clr"></Col>
        <Col className="orange-clr"></Col>
        <Col className="yellow-clr"></Col>
      </Row>
    </>
  );
};

export default index;
