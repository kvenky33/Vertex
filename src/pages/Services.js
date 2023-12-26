import React from "react";
import Banner from "../components/Banner";
import Servicebanner from "../components/assets/images/ServiceBanner .png";
import ServicesInfo from "../components/ServicesInfo";
import AboutITServices from "../components/AboutITServices";
const Services = () => {
  return (
    <div>
      <Banner image={Servicebanner} />
      <ServicesInfo />
      <AboutITServices
        p1="The time has come to reinvent your organization by implementing a simplified IT infrastructure that manages all of your operational processes, in a Microsoft’s secure environment. Vertex Consulting is experienced in IT infrastructure management, on premise or in the Cloud we will support all of your business processes from simple to more complex. Whether you need help managing inventory, emails, servers, our dedicated team of IT professionals will guide you to increased agility and efficiency. Offerings include: Microsoft Azure, Office 365, Cloud services."
        p2="The time has come to reinvent your organization by implementing a simplified IT infrastructure that manages all of your operational processes, in a Microsoft’s secure environment. Vertex Consulting is experienced in IT infrastructure management, on premise or in the Cloud we will support all of your business processes from simple to more complex. Whether you need help managing inventory, emails, servers, our dedicated team of IT professionals will guide you to increased agility and efficiency. Offerings include: Microsoft Azure, Office 365, Cloud services."
        p3="Our technicians will expertly guide your implementation. Vertex Consulting has established a rigorous implementation methodology to support and guide our clients throughout the project. Our teams understand the importance of meticulous follow up, communication, and a controlled methodology to manage a successful implementation."
        p4="Adding customized and database software to your existing infrastructure has become a necessity in order to implement new work methodologies. Our experienced, certified staff will assist your team, or take lead the project. Either way, you can be assured of the outcome: increased efficiencies, improved performance and a robust system in place."
      />
    </div>
  );
};

export default Services;
