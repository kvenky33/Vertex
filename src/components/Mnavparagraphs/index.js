import React from "react";
import "./styless.css";
import { Container } from "react-bootstrap";
const Mnavparagraphs = (props) => {
  return (
    <div>
      <Container>
        <p className="para-head">{props.parahead}</p>

        <p className="para">{props.para1}</p>

        <p className="para">{props.para2}</p>
        <p className="para">{props.para3}</p>
      </Container>
    </div>
  );
};

export default Mnavparagraphs;
