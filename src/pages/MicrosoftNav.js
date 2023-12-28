import React from "react";
import { Container, Image } from "react-bootstrap";
import "./MicrosoftNav.css";
import Banner from "../components/Banner";
import MicrosoftnavBanner from "../components/assets/images/MicrosoftNavBanner Image.png";
import BlackContainer from "../components/BlackContainer";
import Mnavparagraphs from "../components/Mnavparagraphs";
import ProvidesContainer from "../components/ProvidesContainer";
import microsoftNavLogo from "../components/assets/images/dynamics-nav-logo-108px.png";
const MicrosoftNav = () => {
  return (
    <div>
      <Banner image={MicrosoftnavBanner} />

      {/************************  Microsoft Dynamic nav****************************************** */}

      <div className="py-5">
        <div className="d-flex flex-column justify-content-center align-items-center gap-4 p-5">
          <Image src={microsoftNavLogo} alt="microsoftnavlogo" />

          <p className="Mnav-head ">Microsoft</p>
          <p className="Mnav-head ">Dynamics NAV</p>
        </div>

        <Mnavparagraphs
          parahead=" Vertex Consulting Experience with Dynamics NAV"
          para1=" For over 30 years, Microsoft Dynamics NAV has provided powerful
        business management functionality to millions of users around the
        world. Quick deployments and adaptable core components like financial
        management, reporting, service management, and supply chain management
        made it the most popular ERP solution in the Microsoft Dynamics line."
          para2=" Vertex Consulting added value to the clients with implementing and
        supporting Microsoft Dynamics NAV. We are the pioneers in supporting
        Microsoft Dynamics NAV Solutions and performing COST EFFECTIVE upgrade
        solutions to Dynamics Business Central and Dynamics 365."
          para3=" Microsoft Dynamics NAV is now part of Dynamics 365 and has been
        rebranded as Microsoft Dynamics 365 Business Central."
        />

        <Mnavparagraphs
          parahead="Integrations & Add-On Support"
          para1="In addition to the core functionality of Dynamics NAV, our expertise includes manufacturing ,distribution and rental solutions built on Dynamics NAV. "
          para2="Vertex Consulting has over a decade of experience providing support and maintenance, assisting with customizations and integrations, and training customers how to best use this outstanding software."
        />
      </div>

      {/* ***********************Vertex Providing and maintaines****************************** */}

      <ProvidesContainer />

      {/* ****************Thinking of transitioning to Dynamics 365 Business Central?*************** */}

      <div className="text-white transition-Container py-5">
        <Container>
          <p className="Thinking-head">
            Thinking of transitioning to <br /> Dynamics 365 Business Central?
          </p>

          <p>
            As you probably know, Microsoft has rebranded, enhanced and
            transitioned Dynamics NAV to Dynamics 365 Business Central. If your
            business is interested in implementing an ERP system with all the
            features of Dynamics NAV, plus the newest emerging technologies,
            we’re excited to offer Dynamics 365 Business Central, on-premises or
            in the cloud. Dynamics 365 Business Central includes all the core
            functionality of Dynamics NAV, along with new technology innovations
            such as artificial intelligence, IoT, machine learning, automations,
            and real-time data streaming. Tighter integrations with other
            Microsoft business applications make it easier to connect your
            functionality, analyze information, streamline workflows, and unify
            your business. Additionally, regular upgrades for Business Central
            are automatic, saving you the time and hassle of requiring IT
            support just to update your system.
          </p>
          <p className="p-0 m-0">
            Vertex Consulting offers vertical solutions in manufacturing,
            distribution, food industry, rental industry, oil and gas industry,
            and medical industry built on Microsoft Dynamics 365 Business
            Central.
          </p>
        </Container>
      </div>

      <BlackContainer para="Please feel free to Contact Team Vertex for question related to upgrade or transition to Dynamics 365 Business Central." />
    </div>
  );
};

export default MicrosoftNav;
