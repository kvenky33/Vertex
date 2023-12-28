import React from "react";
import { Container, Image } from "react-bootstrap";
import "./styles.css";

const MBusinessFeature = (props) => {
  return (
    <div>
      <Container className="d-flex align-items-start gap-3">
        <Image src={props.icon} alt="numberIcon" className="feature-icon" />
        <div className="p-1">
          <p className="feature-head fw-bold"> {props.head} </p>
          <p className="feature-para">{props.para}</p>
        </div>
      </Container>
    </div>
  );
};

export default MBusinessFeature;
