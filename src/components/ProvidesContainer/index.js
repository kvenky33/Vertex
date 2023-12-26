import React from "react";
import { Container, Image, Row, Col } from "react-bootstrap";
import allversionsIcon from "../assets/icons/all-icon.png";
import handShakeIcon from "../assets/icons/shake-hands-icon.png";
import IntegrationIcon from "../assets/icons/integrations-icon.png";
import addsOnIcon from "../assets/icons/add-ons-icon.png";
import "./style.css";
const ProvidesContainer = () => {
  return (
    <div className="provide-container p-5">
      <Container>
        <p className="provideHead">
          Vertex Consulting provides
          <br /> ongoing support and maintenance for
        </p>
        <div>
          <Row>
            <Col className="ProvideItemBg m-4 py-4">
              <div className="d-flex flex-column justify-content-center align-items-center  gap-5">
                <Image
                  src={allversionsIcon}
                  alt="all-versions"
                  className="pt-3"
                />
                <p className="Provide-name">All versions of Dynamics NAV</p>
              </div>
            </Col>
            <Col className="ProvideItemBg m-4 py-4">
              <div className="d-flex flex-column justify-content-center align-items-center  gap-5">
                <Image
                  src={handShakeIcon}
                  alt="shakehand-icon "
                  className="pt-3"
                />
                <p className="Provide-name ">
                  Customizations and Configurations
                </p>
              </div>
            </Col>
            <Col className="ProvideItemBg m-4 py-4">
              <div className="d-flex flex-column justify-content-center align-items-center  gap-5  ">
                <Image
                  src={IntegrationIcon}
                  alt="integration-icon"
                  className="pt-3"
                />
                <p className="Provide-name">Integrations</p>
              </div>
            </Col>
            <Col className="ProvideItemBg m-4 py-4">
              <div className="d-flex flex-column justify-content-center align-items-center  gap-5 ">
                <Image src={addsOnIcon} alt="all-icon" className="pt-3" />
                <p className="Provide-name">Add-ons</p>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
};

export default ProvidesContainer;
