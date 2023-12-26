import React from "react";
import Vertexlogo from "../assets/images/VERTEX-LOGO.png";
import "bootstrap/dist/css/bootstrap.min.css";
import emailIcon from "../assets/icons/email-icon.svg";
import phoneIcon from "../assets/icons/phone-icon.svg";
import {
  Navbar,
  Nav,
  Container,
  Row,
  Col,
  Stack,
  Image,
  Dropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

const CustomNavbar = () => {
  return (
    <Nav>
      <Navbar
        bg="white"
        expand="lg"
        className=" px-5  position-fixed w-100 z-3 "
      >
        <Container className="h-25">
          <Navbar.Brand className="navBrand">
            <img
              src={Vertexlogo}
              alt="logo"
              className="d-inline-block align-top brand-Image "
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ms-auto mt-2 links ">
              <Nav.Link className="link-margin" as={Link} to="/">
                About us
              </Nav.Link>

              <Nav.Link className="link-margin ">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="Secondary"
                    className="dropdown-head p-0 m-0 "
                  >
                    Solutions
                  </Dropdown.Toggle>

                  <Dropdown.Menu className="nav-dropdown">
                    <Dropdown.Item
                      as={Link}
                      to="/Solutions/MicrosoftDynamics-365"
                    >
                      Microsoft Dynamics 365
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as={Link}
                      to="/Solutions/MicrosoftDynamics-365-Business-Central"
                    >
                      Microsoft Dynamics 365 Business central
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as={Link}
                      to="/Solutions/MicrosoftDynamics-365-NAV"
                    >
                      Microsoft Dynamics 365 NAV
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/Solutions/Power-Bi">
                      Power BI
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item as={Link} to="/Solutions/Power-Apps">
                      Power Apps
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
              <Nav.Link className="link-margin" as={Link} to="/services">
                Services
              </Nav.Link>
              <Nav.Link className="link-margin" as={Link} to="/partners">
                Partners
              </Nav.Link>
              <Nav.Link className="link-margin" as={Link} to="/contacts">
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="nav-contact text-white   position-fixed  ps-5 z-2 ">
        <Container>
          <Row>
            <Col md={{ span: 10, offset: 7 }} sm={{ span: 10, offset: 6 }}>
              <Stack direction="horizontal" className="nav-contacts" gap={3}>
                <Stack direction="horizontal">
                  <Image src={phoneIcon} alt="phone-icon" className="mb-1" />
                  <p className="pt-2 ps-2">(713) 574-8456 </p>
                </Stack>
                <Stack direction="horizontal">
                  <Image src={emailIcon} alt="email" className="mb-1 " />
                  <p className="pt-2 ps-2 ">info@vertex.consulting</p>
                </Stack>
              </Stack>
            </Col>
          </Row>
        </Container>
      </div>
    </Nav>
  );
};

export default CustomNavbar;
