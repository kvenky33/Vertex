import React from "react";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import colorstrip from "../assets/images/Color Stripe.png";
import dynamicsImage from "../assets/images/merged-dynamics-365-video-image-small-size.png";
import dynamicsLogo from "../assets/images/dynamics-365-logo-108px.png";
import businessImage from "../assets/images/merged-business-central-video-image-small-size.png";
import businessLogo from "../assets/images/business-central-logo-108px.png";
import SolutionIcon from "../assets/icons/solution-icon-108px.svg";
import dynamicsNav from "../assets/images/dynamics-nav-logo-108px.png";
import powerbiImage from "../assets/images/power-bi-image-small-size.png";
import powerbiLogo from "../assets/images/power-bi-logo-108px.png";
import powerAppsImage from "../assets/images/power-apps-image-small-size.png";
import powerappsLogo from "../assets/images/power-apps-logo.png";
import arrowUp from "../assets/icons/arrow-up-right.svg";
import {
  Button,
  Container,
  Image,
  Stack,
  Card,
  Row,
  Col,
} from "react-bootstrap";
const index = () => {
  return (
    <div className="abt-sol ">
      <Container>
        {/* ------------------------------------------------------------------------------ */}
        {/* --------------------------overview of solutions---------------------------------*/}
        {/* ------------------------------------------------------------------------------- */}
        <Container>
          <Row className="justify-content-center  align-items-center  textcolor ">
            <Col>
              <Stack direction="horizontal" gap={3} className="p-3 ">
                <Image src={SolutionIcon} alt="solution-icon" />
                <p className="abt-sol-head">Solutions</p>
              </Stack>

              <hr className="hrline-blue" />
            </Col>
            <Col>
              <Stack gap={3}>
                <p className="abt-help m-3 pt-2">
                  Help your employees work more efficiently as a team
                </p>
                <Image
                  src={colorstrip}
                  alt="mini-colorstrip "
                  className="color-line"
                />
              </Stack>
            </Col>
          </Row>
          <p className="h4 py-2 textcolor">
            {" "}
            We Can Offer You All The Tools You Need To Optimize Your Operation.
          </p>
        </Container>

        {/* ------------------------------------------------------------------------------------------------- */}
        {/*------------------------------------- micro soft Dynamics 365 --------------------------------------*/}
        {/* ------------------------------------------------------------------------------------------------------------ */}
        <Container className="py-5">
          <Stack gap={5}>
            <Card className="card">
              <Row className=" flex-md-row">
                <Col xs={12} md={6}>
                  <Card.Img
                    src={dynamicsImage}
                    alt="dynamicsImage"
                    className="h-auto w-100"
                  />
                </Col>

                <Col xs={12} md={6}>
                  <Card.Body className="d-flex flex-column gap-2">
                    <Card.Title>
                      <Stack direction="horizontal" gap={3}>
                        <Image src={dynamicsLogo} alt="dynamicslogo" />
                        <p className="card-heading">
                          Microsoft
                          <br /> Dynamics 365
                        </p>
                      </Stack>
                    </Card.Title>
                    <Card.Text className="card-info pt-3 ps-1">
                      Microsoft Dynamics 365 is the complete solution for your
                      teams in sales, marketing, operations, finance, and
                      project management.
                    </Card.Text>
                    <Button className="rounded border-white  small-btn ">
                      <Stack
                        direction="horizontal"
                        gap={2}
                        className="justify-content-center align-items-center"
                      >
                        <p className="text-white mt-1">know more</p>
                        <Image
                          src={arrowUp}
                          alt="arrow-up"
                          className="arrow-up mb-2"
                        />
                      </Stack>
                    </Button>
                  </Card.Body>
                </Col>
              </Row>
            </Card>

            <hr />
            <Card className="card ">
              <Row className="flex-column-reverse flex-md-row">
                <Col xs={12} md={6}>
                  <Card.Body className="d-flex flex-column gap-2">
                    <Card.Title>
                      <Stack direction="horizontal" gap={3}>
                        <Image src={businessLogo} alt="businesslogo" />
                        <Stack>
                          <p className="card-heading">
                            {" "}
                            Microsoft
                            <br /> Dynamics 365
                          </p>

                          <Card.Subtitle>Business Central</Card.Subtitle>
                        </Stack>
                      </Stack>
                    </Card.Title>

                    <Card.Text className="card-info pt-2 ps-1">
                      Microsoft’s all-in-one business management solution for
                      small and medium sized businesses is now available in the
                      cloud as a robust, scalable solution.
                    </Card.Text>
                    <Button className="rounded border-white  small-btn ">
                      <Stack
                        direction="horizontal"
                        gap={2}
                        className="justify-content-center align-items-center"
                      >
                        <p className="text-white mt-1">know more</p>
                        <Image
                          src={arrowUp}
                          alt="arrow-up"
                          className="arrow-up mb-2"
                        />
                      </Stack>
                    </Button>
                  </Card.Body>
                </Col>
                <Col xs={12} md={6}>
                  <Card.Img
                    src={businessImage}
                    alt="businessImage"
                    className="h-auto w-100"
                  />
                </Col>
              </Row>
            </Card>
            {/* ----------------------------------------------------------------------------------------------- */}
            {/* ------------------------------------- microsoft dynamics nav----------------------------------- */}
            {/* ----------------------------------------------------------------------------------------------- */}
            <Container className="dynamic-nav bg-dark p-5">
              <Row>
                <Col className="p-md-5">
                  <Stack direction="horizontal" gap={3}>
                    <Image src={dynamicsNav} alt="dynamicnav-logo " />
                    <p className="h3 ">
                      Microsoft <br />
                      Dynamics Nav
                    </p>
                  </Stack>
                </Col>
                <Col className="p-4">
                  <Stack gap={3}>
                    <p>
                      Microsoft Dynamics NAV is now part of Dynamics 365 and has
                      been rebranded as Microsoft Dynamics 365 Business Central.
                    </p>
                    <p>
                      {" "}
                      Cost effective upgrade solutions to Dynamics Business
                      Central and Dynamics 365.
                    </p>
                    <Button className="rounded dynamicsNav-btn">
                      <Stack
                        direction="horizontal"
                        gap={2}
                        className="justify-content-center align-items-center"
                      >
                        <p className="text-white mt-1">know more</p>
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
            {/* ----------------------------------------------------------------------------------------------- */}
            {/* -------------------------------power Bi and power apps----------------------------------------- */}
            {/* ------------------------------------------------------------------------------------------------- */}
            <Container>
              <Stack gap={5}>
                <Card>
                  <Row className="flex-column-reverse flex-md-row">
                    <Col xs={12} md={6}>
                      <Card.Body className="d-flex flex-column gap-3">
                        <Card.Title>
                          <Stack direction="horizontal" gap={3}>
                            <Image src={powerbiLogo} alt="powerbi-logo" />
                            <p className="card-heading">Power BI</p>
                          </Stack>
                        </Card.Title>
                        <Card.Text className="card-info pt-4 ps-1">
                          A Business analytics service that delivers insights to
                          enable fast, informed decisions.
                        </Card.Text>
                        <Button className="rounded border-white  small-btn ">
                          <Stack
                            direction="horizontal"
                            gap={2}
                            className="justify-content-center align-items-center"
                          >
                            <p className="text-white mt-1">know more</p>
                            <Image
                              src={arrowUp}
                              alt="arrow-up"
                              className="arrow-up mb-2"
                            />
                          </Stack>
                        </Button>
                      </Card.Body>
                    </Col>
                    <Col xs={12} md={6}>
                      <Card.Img
                        src={powerbiImage}
                        alt="powerbiImage"
                        className="h-auto w-100"
                      />
                    </Col>
                  </Row>
                </Card>
                <hr />
                <Card className="card ">
                  <Row className=" flex-md-row">
                    <Col xs={12} md={6}>
                      <Card.Img
                        src={powerAppsImage}
                        alt="powerapps-Image "
                        className="h-auto w-100"
                      />
                    </Col>
                    <Col xs={12} md={6}>
                      <Card.Body className="d-flex flex-column gap-3">
                        <Card.Title>
                          <Stack direction="horizontal" gap={3}>
                            <Image src={powerappsLogo} alt="powerapps-logo" />
                            <Stack>
                              <p className="card-heading">Power Apps</p>
                            </Stack>
                          </Stack>
                        </Card.Title>

                        <Card.Text className="card-info pt-2 ps-1">
                          Increase agility across your organisation by rapidly
                          building low-code apps with AI that modernise
                          processes and solve tough challenges.
                        </Card.Text>
                        <Button className="rounded border-white  small-btn ">
                          <Stack
                            direction="horizontal"
                            gap={2}
                            className="justify-content-center align-items-center"
                          >
                            <p className="text-white mt-1">know more</p>
                            <Image
                              src={arrowUp}
                              alt="arrow-up"
                              className="arrow-up mb-2"
                            />
                          </Stack>
                        </Button>
                      </Card.Body>
                    </Col>
                  </Row>
                </Card>
              </Stack>
            </Container>
          </Stack>
        </Container>
      </Container>
    </div>
  );
};

export default index;
