import React from "react";

import { Image, Row, Col } from "react-bootstrap";
import "./styles.css";
const Banner = (props) => {
  return (
    <div className=" pt-sm-5 header-img">
      <Image
        src={props.image}
        alt="banner-image"
        fluid
        className="pt-5 mt-3  "
      />

      <Row className="clr-strip ">
        <Col className="blue-clr"></Col>
        <Col className="orange-clr"></Col>
        <Col className="yellow-clr"></Col>
      </Row>
    </div>
  );
};

export default Banner;
