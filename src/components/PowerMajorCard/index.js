import React from "react";
import "./styles.css";
import { Container, Image, Stack } from "react-bootstrap";

const PowerMajorCard = (props) => {
  return (
    <Container className="p-5">
      <Stack gap={3}>
        <div className="d-flex gap-3 align-items-center">
          <Image src={props.logo} alt="logo" />
          <p className="Majorcard-head">{props.heading}</p>
        </div>
        <Image src={props.image} alt="newPower-bi-image" />

        <p>{props.p1}</p>
        <p>{props.p2}</p>

        <p>
          <span className="text-danger pe-1">{props.p3red} </span>
          {props.p3}
        </p>
      </Stack>
    </Container>
  );
};

export default PowerMajorCard;
