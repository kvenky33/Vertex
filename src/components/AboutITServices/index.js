import React from "react";
import "./styles.css";
import ITserviceslogo from "../assets/icons/it-services-icon-130x110px.png";
import cloudIcon from "../assets/icons/cloud-icon-140px.png";
import implementationIcon from "../assets/icons/link-icon-140px.png";
import systemDevIcon from "../assets/icons/system-deployment-icon-140px.png";
import OptimizingIcon from "../assets/icons/puzzle-icon-140px.png";
import colorstrip from "../assets/images/Color Stripe.png";
import { GoArrowUpRight } from "react-icons/go";
import { Container, Image, Stack, Row, Col, Button } from "react-bootstrap";
const index = (props) => {
  return (
    <section className="abt-itservices p-5">
      <Container>
        <Container className="itservices-res">
          <Stack direction="horizontal" className="w-50 px-5" gap={3}>
            <Image src={ITserviceslogo} alt="Itservices-logo" />
            <Stack
              className="justify-content-center align-items-center "
              gap={2}
            >
              <p className="h3">Our IT Services</p>
              <Image src={colorstrip} alt="color-strip" className="w-100" />
            </Stack>
          </Stack>

          <Stack className="justify-content-center align-items-center pt-5">
            <p className="mb-0">
              Complete digital transformation solution under one roof:
            </p>
            <p className="mt-0">
              Project Management, Technological Choice, Solution Deployment and
              Optimization.
            </p>
          </Stack>
        </Container>

        <Container className="py-3 ">
          <Row className="itservices-res">
            <Col className="left-column  ">
              <Stack className="justify-content-center align-items-center servicename-res ">
                <div className="customborder-end ">
                  <Stack
                    direction="horizontal"
                    className="justify-content-center ps-5  h-25"
                  >
                    <Image src={cloudIcon} alt="cloudIcon" />
                    <p className="h4  ps-1 ">
                      {" "}
                      Infrastructure and Cloud Management Services
                    </p>
                  </Stack>
                  <p className="w-75 ps-5 p1">{props.p1}</p>
                </div>
                <hr className="w-75 bottom-line1" />
              </Stack>
            </Col>

            <Col className="right-column">
              <Stack className="justify-content-center align-items-center servicename-res">
                <div>
                  <Stack
                    direction="horizontal"
                    className="justify-content-center    h-25"
                  >
                    <Image src={implementationIcon} alt="ImplementationIcon" />
                    <p className="h5  w-25"> Implementation</p>
                  </Stack>
                  <p className="w-75 ps-5 p2">{props.p2}</p>
                </div>
                <hr className="w-75 bottom-line2" />
              </Stack>
            </Col>
          </Row>

          <Row className="itservices-res">
            <Col className="left-column ">
              <Stack className="justify-content-center align-items-center servicename-res customborder-end">
                <div>
                  <Stack
                    direction="horizontal"
                    className="justify-content-center ps-5  h-25"
                  >
                    <Image src={systemDevIcon} alt="systemDevIcon" />
                    <p className="h4  ps-1 "> System Deployment</p>
                  </Stack>
                  <p className="w-75  ps-5  p3">{props.p3}</p>
                </div>
                <hr className="w-75 bottom-line3" />
              </Stack>
            </Col>

            <Col className="right-column">
              <Stack className="justify-content-center align-items-center servicename-res">
                <div>
                  <Stack
                    direction="horizontal"
                    className="justify-content-center    h-25"
                  >
                    <Image src={OptimizingIcon} alt="Optimizing-Icon" />
                    <p className="h5  w-25"> Optimizing with Technology</p>
                  </Stack>
                  <p className="w-75  ps-5 p4">{props.p4}</p>
                </div>
              </Stack>
            </Col>
          </Row>
          <Stack className="justify-content-center align-items-center pt-5 ">
            <Button className="bg-white explore-btn ">
              <Stack
                direction="horizontal"
                gap={3}
                className="justify-content-center align-items-center"
              >
                <p className="pt-2"> Explore more about Services</p>
                <GoArrowUpRight className="explore-arrow" />
              </Stack>
            </Button>
          </Stack>
        </Container>
      </Container>
    </section>
  );
};

export default index;
