import React from "react";
import { Container } from "react-bootstrap";
import "./powerapps.css";
import Banner from "../components/Banner";
import PowerAppsBanner from "../components/assets/images/PowerAppsBanner Image.png";
import PowerMajorCard from "../components/PowerMajorCard";
import PowerminorCard from "../components/PowerminorCard";
import Powerheader from "../components/Powerheader";
import powerAppsLogo from "../components/assets/images/power-apps-logo.png";
import custompowerAppIcon from "../components/assets/icons/custom-power-apps-icon-100px.svg";
import custompowerAppImage from "../components/assets/images/custom-power-apps-image.png";
import RoboticAppIcon from "../components/assets/icons/robotic-process-automation-icon-100px.png";
import RoboticAppImage from "../components/assets/images/robotic-process-automation-image.png";
import modernizationAppIcon from "../components/assets/icons/app-modernization-icon-100px.png";
import modernizationAppImage from "../components/assets/images/app-modernization-image.png";
import coeAppIcon from "../components/assets/icons/ceo-icon-100px.png";
import coeAppImage from "../components/assets/images/coe-image.png";

const PowerApps = () => {
  return (
    <div>
      <Banner image={PowerAppsBanner} />
      <Powerheader
        logo={powerAppsLogo}
        heading="Power Apps"
        descriptionpart1="Vertex Consulting is an early adopter and leader with Power Apps, Power Automate and Dataverse cloud technologies with many enterprise grade Power Apps and Power Automate running in production."
        descriptionbold=" We have been working with and doing PowerApps and Power Automate consulting since its inception in 2016 "
        descriptionpart2="and will assist you in addressing your complex business problems leveraging PowerApps and Power Automate to drive successful results."
      />
      <div className=" px-3 AppsMajorcard">
        <PowerMajorCard
          logo={custompowerAppIcon}
          image={custompowerAppImage}
          heading="Custom PowerApps Development"
          p1="Empower your business users to build innovative solutions and solve
          complex problems with PowerApps. As your technology solutions partner,
          we can help you build engaging and modern application solutions that
          enables cross-team collaboration, transform your organization’s
          mindset, and become future-ready!"
          p2=" Vertex’s professional services team can work collaboratively with your
          business and technical stakeholders to transform and modernize your
          organization by helping them build robust Canvas or Model Driven
          professional- grade Apps, create automated workflows, connect diverse
          data sources, and embed intuitive dashboards into your Apps."
          p3red="Contact us"
          p3=" today for a free PowerApps consultation  and find out how we can
          digitize your world through automation and rapid delivery!"
        />
      </div>
      <div className="minorcardApp ">
        <Container className="p-3">
          <PowerminorCard
            logo={RoboticAppIcon}
            image={RoboticAppImage}
            heading="Business & Robotic Process Automation"
            p1="If you are a high-volume business consistently operating complex tasks and processes that span across multiple business groups and departments, you will need to leverage the power of Robotic Process Automation, or RPA. RPA can improve speed, efficiency, accuracy, and quality of your processes, but more importantly, it can boost employee productivity and morale, and derive more value from your personnel by allowing them to focus on more strategic work, transforming the organizational outlook and sparking innovation. "
            p2="Vertex has implemented numerous RPA solutions across industry spectrum using Microsoft Power Automate. Whether you are looking to implement Desktop Flows, Cloud Flows, Process Adviser or AI Builder we have the intellectual capital, consulting expertise and the business acumen to help you rapidly automate your business processes and workflows using our proven Agile and DevOps based delivery model."
            p3red="Contact us"
            p3=" today for a free assessment report  of your environment and find out areas of automation opportunities that can transform your organization."
          />
          <hr />
          <PowerminorCard
            logo={modernizationAppIcon}
            image={modernizationAppImage}
            heading="Application Modernization & Transformation"
            p1="Change can be a daunting process for any organization that want to modernize and transform their existing application ecosystem. It is a large undertaking that can overwhelm employees and disrupt business continuity and customer service if proper strategy is not applied, or the plan is not well executed. "
            p2="Vertex uses a proven approach to modernization using Microsoft based tools and platforms that optimizes existing technology stack while enabling a smooth transition to a leading infrastructure that minimizes risks and achieves favorable outcomes. Starting with a thorough assessment of your existing technology ecosystem from our experienced technology team, we rapidly deliver on the future state solution using Agile/DevOps delivery framework improving your application mix and bringing measurable outcomes, in addition to controlling costs and boosting your organizational performance. Furthermore, being an end-to-end managed services provider, our team will continue to collaborate with you post modernization to ensure future state stability."
            p3red="Contact us"
            p3="today for a free assessment  of your existing application landscape!"
          />
          <hr />
          <PowerminorCard
            logo={coeAppIcon}
            image={coeAppImage}
            heading="Center of Excellence and Governance"
            p1="We operate in an era where change is the only constant as it relates to technology. IT Organizations must learn to become comfortable with the change and constantly adapt to the changes to meet the demands and expectations of the business and customers. It is understood that one way to achieve success and maintain sanity in a changing organizational environment is to ensure the people, process, and technology are well aligned, but more importantly the knowledge is protected and efficiently managed through and beyond transformation. The best way to achieve this is by implementing a robust center of excellence (CoE) and a governance model that set up and governed by the CoE. "
            p2="At Vertex, we have constructed CoE methodology and framework that is built on Microsoft’s Power Platform, that empowers you to utilize the power of automation to strategize, implement and sustain changes within your organization, while at the same time driving innovation and enabling continuous improvement"
            p3red="Contact us"
            p3="today  to find out how we can help you put in place a robust CoE strategy."
          />
        </Container>
      </div>
    </div>
  );
};

export default PowerApps;
