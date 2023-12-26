import React from "react";
import "./style.css";

import "bootstrap/dist/css/bootstrap.min.css";
import bannerImage from "../assets/images/Banner Image.png";
import technologyAdvisor from "../assets/images/technology-advisor-illustration.png";
import arrowUp from "../assets/icons/arrow-up-right.svg";
import { Image, Row, Col, Button, Stack, Container } from "react-bootstrap";
import Banner from "../Banner";
const AboutTech = () => {
  return (
    <section>
      <Banner image={bannerImage}/>
         
      <section className="know-more ">
        <Container className="py-4 ">
          <Row className=" tech-advisor justify-content-center align-items-center">
            <Col>
              <Image
                src={technologyAdvisor}
                alt="technology-advisor"
                className=" w-md-100 res-techimage "
              />
            </Col>

            <Col>
              <Stack gap={3} className="pt-5 ">
                <p className="h3 text-white w-md-25">
                  Technology Adding Value to Your Business
                </p>
                <p className="text-white w-md-25">
                  Get complete solution for your teams in sales, marketing,
                  operations, finance, and project management.
                </p>
                <Button
                  variant="outline-secondary"
                  className="rounded  border-white   techMore-btn"
                >
                  <Stack
                    direction="horizontal"
                    gap={2}
                    className="justify-content-center align-items-center"
                  >
                    <p className="text-white mt-1">know more about us</p>
                    <Image
                      src={arrowUp}
                      alt="arrow-up"
                      className="arrow-up mb-2"
                    />
                  </Stack>
                </Button>
              </Stack>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default AboutTech;
