import React from "react";
import "./style.css";
import messageIcon from "../assets/icons/message-contact-icon-70px.png";
import callIcon from "../assets/icons/call-us-icon-70px.png";
import faxIcon from "../assets/icons/fax-icon-40px.png";
import mailIcon from "../assets/icons/email-icon-40px.png";
import { Stack, Row, Col, Container } from "react-bootstrap";
const index = () => {
  return (
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
  );
};

export default index;
