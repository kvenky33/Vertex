import React from "react";
import "./style.css";
import vertexGrayLogo from "../assets/images/vertex-logo-gray-354x96px.png";
import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import messageIcon from "../assets/icons/message-contact-icon-70px.png";
import callIcon from "../assets/icons/call-us-icon-70px.png";
import faxIcon from "../assets/icons/fax-icon-40px.png";
import mailIcon from "../assets/icons/email-icon-40px.png";
import locationIcon from "../assets/icons/location-icon-30px.svg";
import facebookIcon from "../assets/icons/fb-icon-gray-30px.svg";
import instagramIcon from "../assets/icons/insta-icon-gray-30px.png";
import linkedinIcon from "../assets/icons/linkedin-icon-gray-30px.svg";
import threadsIcon from "../assets/icons/thread-icon-gray-30px.svg";
import twitterIcon from "../assets/icons/twitter-icon-gray-30px.svg";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="bg-white">
        <Container className=" text-dark d-flex flex-column align-items-center  p-5 gap-5 ">
          <p className="h1 ">Contact Sales.</p>

          <Row>
            <Col className="  borderline p-5 ">
              <Stack direction="horizontal">
                <img src={messageIcon} alt="message-icon" />
                <p className="fw-semibold ">Contact us</p>
              </Stack>
              <hr className="sales-hrline" />
            </Col>

            <Col className="  borderline mx-5 col-md-auto pe-5 ">
              <Stack gap={5}>
                <Stack direction="horizontal" gap={3}>
                  <img src={callIcon} alt="call-icon" />
                  <div className="d-flex flex-column align-items-center justify-content-center">
                    <p className="fw-semibold">Call us</p>
                    <p className="text-muted ">(713) 574-8456</p>
                  </div>
                </Stack>

                <p className="text-muted ">
                  Available Monday to Friday <br />9 AM to 6 PM GMT-5.{" "}
                </p>
              </Stack>
              <hr className="sales-hrline" />
            </Col>

            <Col className="p-5 ">
              <Stack gap={4}>
                <Stack direction="horizontal" gap={2}>
                  <img src={faxIcon} alt="fax-icon" />
                  <p className="text-muted">(281) 946-8777</p>
                </Stack>
                <Stack direction="horizontal" gap={2}>
                  <img src={mailIcon} alt="mail-icon" />
                  <p className="text-muted">info@vertex.consulting</p>
                </Stack>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="bg-light">
        <Container className=" p-5 ">
          <Row className="justify-content-center ">
            <Col>
              <p className="fw-semibold cursor" onClick={() => navigate("./")}>
                About us{" "}
              </p>
              <p
                className="fw-semibold cursor"
                onClick={() => navigate("./services")}
              >
                services
              </p>
              <p
                className="fw-semibold cursor"
                onClick={() => navigate("./partners")}
              >
                partners{" "}
              </p>
            </Col>
            <Col>
              <p className="fw-semibold cursor">Solutions</p>
              <p
                className="text-muted cursor"
                onClick={() => navigate("./Solutions/MicrosoftDynamics-365")}
              >
                Microsoft Dynamics 365
              </p>
              <p
                className="text-muted cursor"
                onClick={() =>
                  navigate("./Solutions/MicrosoftDynamics-365-Business-Central")
                }
              >
                Microsoft Dynamics 365 Business Central
              </p>
              <p
                className="text-muted cursor"
                onClick={() =>
                  navigate("./Solutions/MicrosoftDynamics-365-NAV")
                }
              >
                Microsoft Dynamics Nav
              </p>
              <p
                className="text-muted cursor"
                onClick={() => navigate("./Solutions/Power-Bi")}
              >
                Power Bi
              </p>
              <p
                className="text-muted cursor"
                onClick={() => navigate("./Solutions/Power-Apps")}
              >
                Power Apps
              </p>
            </Col>

            <Col>
              <Stack>
                <Image src={vertexGrayLogo} alt="vertex-logo" />
                <Stack
                  direction="horizontal"
                  gap={2}
                  className=" align-items-center"
                >
                  <Image
                    src={locationIcon}
                    alt="location-Icon"
                    className="location-icon"
                  />

                  <p className="pt-3 mt-5 text-muted">
                    405-Main Street,
                    <br /> Ste-507,
                    <br /> Houston , Texas -77002.
                    <br /> U.S.A
                  </p>
                </Stack>
              </Stack>
            </Col>
          </Row>
          <hr />

          <div className="py-4 ">
            <Stack
              direction="horizontal"
              className="justify-content-between footerbgtm-res text-muted  "
            >
              <p> ©Vertex Consulting Copyright 2023</p>
              <Stack
                direction="horizontal"
                gap={2}
                className="align-items-center"
              >
                <p className="pt-2 text-muted">Follow us</p>
                <Image src={facebookIcon} alt="facebook-icon" />
                <Image src={instagramIcon} alt="instagram-icon" />
                <Image src={linkedinIcon} alt="linkedin-icon" />
                <Image src={twitterIcon} alt="twitter-icon" />
                <Image src={threadsIcon} alt="threads-icon" />
              </Stack>
            </Stack>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Footer;
