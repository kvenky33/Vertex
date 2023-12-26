import React from "react";
import { Image, Stack, Container } from "react-bootstrap";
import "./styles.css";
import partnersMicrosoftImage from "../assets/images/Partners-microsoft-logo.png";

const PartnersInfo = () => {
  return (
    <>
      <Container>
        <Stack
          className="justify-content-center align-items-center py-5"
          gap={5}
        >
          <Image
            src={partnersMicrosoftImage}
            alt="partnersMicrosoftlogo"
            className="Partner-MicroImg"
          />
          <p className="partners-para">
            It’s hard to imagine a world completely disconnected from one of
            Microsoft’s devices, platforms, or initiatives. This global company
            uses technology to make a lasting positive impact and empower each
            person and organization to achive more.
          </p>
        </Stack>
      </Container>
    </>
  );
};

export default PartnersInfo;
