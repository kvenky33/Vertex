import React from "react";
import "./styless.css";
import { Stack, Image, Container } from "react-bootstrap";

const PowerminorCard = (props) => {
  return (
    <Container>
      <Stack gap={3} className="py-5 ">
        <div className="d-flex gap-3 align-items-center">
          <Image src={props.logo} alt="logo" fluid />
          <p className="mimicard-head"> {props.heading}</p>
        </div>
        <div className="d-flex flex-column-reverse flex-lg-row  gap-3">
          <Stack gap={3} className="minorcard-para">
            <p>{props.p1}</p>
            <p>{props.p2}</p>

            <p>
              <span className="text-danger pe-1">{props.p3red} </span>
              {props.p3}
            </p>
          </Stack>
          <div>
            <Image src={props.image} alt="miragtionImage" />
          </div>
        </div>
      </Stack>
    </Container>
  );
};

export default PowerminorCard;
