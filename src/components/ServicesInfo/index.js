import React from "react";
import "./styles.css";
import { Stack, Image } from "react-bootstrap";
import servicesImage from "../assets/images/services-image.png";
const ServicesInfo = () => {
  return (
    <div>
      <Stack className="jsutify-content-center align-items-center p-5" gap={4}>
        <p className="servicesInfo-head ">
          Project Management, Technological Choice, Solution Deployment and
          Optimization.
        </p>
        <p className="servicesInfo-details">
          Microsoft’s all-in-one business management solution for small and
          medium sized businesses is now available in the cloud as a robust,
          scalable solution to take your business to the next level.
        </p>
        <Image
          src={servicesImage}
          alt="serviceimage"
          className="services-Image"
        />
      </Stack>
    </div>
  );
};

export default ServicesInfo;
