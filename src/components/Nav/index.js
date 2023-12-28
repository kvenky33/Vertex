import React, { useState } from "react";
import Vertexlogo from "../assets/images/VERTEX-LOGO.png";
import "bootstrap/dist/css/bootstrap.min.css";
import emailIcon from "../assets/icons/email-icon.svg";
import phoneIcon from "../assets/icons/phone-icon.svg";
import { Navbar, Nav, Container, Dropdown } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./style.css";

const CustomNavbar = () => {
  const [menu, setMenu] = useState(false);

  const handleMenu = () => {
    setMenu(!menu);
  };
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
              as={Link}
              to="/"
            />
          </Navbar.Brand>
          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            onClick={handleMenu}
          />
          <Navbar.Collapse
            id="responsive-navbar-nav"
            className={menu ? "show" : "noshow"}
          >
            <Nav className="ms-auto mt-2 links ">
              <Nav.Link
                className="link-margin"
                as={Link}
                to="/about"
                onClick={handleMenu}
              >
                About us
              </Nav.Link>

              <Nav.Link className="link-margin ">
                <Dropdown>
                  <Dropdown.Toggle
                    variant="Secondary"
                    className="dropdown-head p-0 m-0  "
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
                      onClick={handleMenu}
                    >
                      Microsoft Dynamics 365 Business central
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as={Link}
                      to="/Solutions/MicrosoftDynamics-365-NAV"
                      onClick={handleMenu}
                    >
                      Microsoft Dynamics 365 NAV
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as={Link}
                      to="/Solutions/Power-Bi"
                      onClick={handleMenu}
                    >
                      Power BI
                    </Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item
                      as={Link}
                      to="/Solutions/Power-Apps"
                      onClick={handleMenu}
                    >
                      Power Apps
                    </Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Nav.Link>
              <Nav.Link
                className="link-margin"
                as={Link}
                to="/services "
                onClick={handleMenu}
              >
                Services
              </Nav.Link>
              <Nav.Link
                className="link-margin"
                as={Link}
                to="/partners"
                onClick={handleMenu}
              >
                Partners
              </Nav.Link>
              <Nav.Link
                className="link-margin"
                as={Link}
                to="/contacts"
                onClick={handleMenu}
              >
                Contact us
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <div className="container-fluid nav-contact   position-fixed  z-2 ">
        <div className="container">
          <div className="d-flex justify-content-center justify-content-sm-end gap-sm-2 ">
            <img src={phoneIcon} alt="phone-icon" className="navContactIcon" />
            <p className="navcontact-number">(713) 574-8456 </p>
            <img src={emailIcon} alt="email" className="navContactIcon" />
            <p className="navcontact-mail">info@vertex.consulting</p>
          </div>
        </div>
        {/* <Row className="py-1">
            <Col md={{ span: 10, offset: 7 }} sm={{ span: 10, offset: 6 }}>
              <Stack direction="horizontal" className="nav-contacts" gap={3}>
                <Stack direction="horizontal">
                  <Image src={phoneIcon} alt="phone-icon" className="mb-1" />
                  <p className="pt-2 ps-2">(713) 574-8456 </p>
                </Stack>
                <Stack direction="horizontal">
                  <Image src={emailIcon} alt="email" className="mb-1" />
                  <p className="pt-2 ps-2 ">info@vertex.consulting</p>
                </Stack>
              </Stack>
            </Col>
          </Row> */}
      </div>
    </Nav>
  );
};

export default CustomNavbar;
