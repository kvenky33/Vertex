import React from "react";
import { Container, Image } from "react-bootstrap";
import "./styles.css";

const M365header = (props) => {
  return (
    <Container className="d-flex flex-column justify-content-center  alingn-items-center py-5">
      <Image src={props.logo} alt="m365logo" className="m365logo m-auto" />
      <p className="M365heading">{props.heading} </p>
      <p className="M365-subheading">{props.subheading}</p>
      <p className="M365-headpara">{props.headpara}</p>
      <Image src={props.image} alt="m365image" className="pb-3" />
      <p className="M365-para">{props.para1}</p>
      <p className="M365-para">{props.para2}</p>
    </Container>
  );
};

export default M365header;
