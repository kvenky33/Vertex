import React from "react";
import "./styles.css";
import { Button, Form, Stack } from "react-bootstrap";
import contactFormBgImage from "../assets/images/contact-us-bg-image.svg";

const ContactForm = () => {
  const divStyle = {
    width: "100%",
    backgroundImage: `url(${contactFormBgImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    color: "white",
    paddingBottom: "100px",
  };
  return (
    <div style={divStyle} className="form-background">
      <Stack className="justify-content-center align-items-center py-5" gap={2}>
        <p className="form-head w-50">
          Look forward to adding value to your business.
        </p>
        <Form className="w-50 position-relative">
          <Form.Control
            type="text"
            className="input-field mb-3 "
            placeholder="Name"
          />
          <Form.Control
            type="text"
            className="input-field mb-3"
            placeholder="Company Name"
          />
          <Form.Control
            type="text"
            className="input-field mb-3"
            placeholder="Job Title"
          />
          <Form.Control
            type="email"
            className="input-field mb-3"
            placeholder="E-mail"
          />
          <Form.Control
            type="number"
            className="input-field mb-3"
            placeholder="Phone Number"
          />
          <Form.Control
            as="textarea"
            className="input-textarea mb-3 "
            placeholder="Message"
          />

          <Button
            variant="primary"
            type="submit "
            className="form-btn position-absolute end-0 mt-4"
          >
            Submit
          </Button>
        </Form>
      </Stack>
    </div>
  );
};

export default ContactForm;
