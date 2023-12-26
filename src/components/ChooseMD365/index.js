import React from "react";
import "./styles.css";
import { Container, Image, Stack } from "react-bootstrap";
import ChooseMD365Image from "../assets/images/merged-dynamics-365-video-image-small-size.png";
const ChooseMD365 = () => {
  return (
    <div className="chooseMD-Container text-white py-5">
      <Container>
        <Stack gap={3}>
          <p className="text-center chooseMDhead">
            Why Choose Microsoft Dynamics 365?
          </p>
          <p className="text-start chooseMDpara">
            Combining intelligent business applications via CRM and ERP,
            Microsoft Dynamics 365 creates a platform that directly address your
            management needs. We also help by adding applications customized to
            your evolving business requirements.
          </p>
          <Image src={ChooseMD365Image} alt="ChooseMD365Image" />
        </Stack>
      </Container>
    </div>
  );
};

export default ChooseMD365;
