import React from "react";
import { Container, Stack, Image } from "react-bootstrap";
import colorStrip from "../assets/images/Color Stripe.svg";

import "./style.css";

const BlackContainer = (props) => {
  return (
    <div className="bg-dark text-white">
      <Container>
        <Stack direction="horizontal" className="py-5" gap={5}>
          <Image src={colorStrip} alt="vertical-clrStrip" />
          <p className="partners-microsoftHead w-75 ps-3">{props.para}</p>
        </Stack>
      </Container>
    </div>
  );
};

export default BlackContainer;
