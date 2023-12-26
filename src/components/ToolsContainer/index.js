import React from "react";
import { Container, Image } from "react-bootstrap";
import toolsImage from "../assets/images/Tools-image.png";
import "./style.css";
const Toolscontainer = () => {
  return (
    <Container className="py-5 px-4">
      <p className="tool-head h4 px-5">
        Vertex Consulting Can Offer You All The Tools You Need To Optimize Your
        Operation.
      </p>
      <p className="tool-para p-2">
        Many of our client have express how they find that managing multiple,
        disparate systems simultaneously can be a complicated and arduous task.
        If this is also the case for you, then the time has come to become more
        efficient through a centralized management system comprising: Field
        Service automation and Project Management.
      </p>
      <Image src={toolsImage} alt="toolsImage" className="toolImage" />
    </Container>
  );
};

export default Toolscontainer;
