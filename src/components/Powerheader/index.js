import React from "react";
import "./styles.css";

import { Container, Image } from "react-bootstrap";
const Powerheader = (props) => {
  return (
    <Container className="d-flex  align-items-center flex-column p-5 gap-3 text-dark power-header">
      <Image src={props.logo} alt="logo" />
      <p className="Power-head"> {props.heading}</p>
      <p className="PowerSub-heading">{props.subheading}</p>
      <p className="header-para">
        {props.descriptionpart1}
        <span className="fw-semibold">{props.descriptionbold}</span>
        {props.descriptionpart2}
      </p>
    </Container>
  );
};

export default Powerheader;
