import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import "./styles.css";
import feature from "../assets/icons/intelligent-icon.svg";
const MD365Features = () => {
  return (
    <div className="p-5 mx-5 ">
      <Container>
        <Row>
          <Col>
            <Image
              src={feature}
              alt="feature"
              className="bluegradient rounded-circle p-4"
            />
            <p className="fw-bold py-3 px-4">Custom</p>
          </Col>
          <Col>
            <Image
              src={feature}
              alt="feature"
              className="bluegradient rounded-circle p-4"
            />
            <p className="fw-bold py-3 px-4 ">Productivity</p>
          </Col>
          <Col>
            <Image
              src={feature}
              alt="feature"
              className="bluegradient rounded-circle p-4"
            />
            <p className="fw-bold py-3 px-4">Intelligent</p>
          </Col>
          <Col>
            <Image
              src={feature}
              alt="feature"
              className="bluegradient rounded-circle p-4"
            />
            <p className="fw-bold py-3 px-4">Adaptability</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default MD365Features;
