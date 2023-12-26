import React from "react";
import { Container } from "react-bootstrap";
import "./powerbi.css";
import Banner from "../components/Banner";
import PowerBiBanner from "../components/assets/images/Power-bi-Banner Image.png";
import Powerheader from "../components/Powerheader";
import PowerMajorCard from "../components/PowerMajorCard";
import powerBiLogo from "../components/assets/images/power-bi-logo-108px.png";
import newPowerBilogo from "../components/assets/icons/new-power-bi-icon-100px.png";
import newPowerBiImage from "../components/assets/images/new-power-bi-image.png";
import PowerminorCard from "../components/PowerminorCard";
import migrationBIIcon from "../components/assets/icons/migration-to-power-bi-Icon-100px.png";
import migrationBIImage from "../components/assets/images/migration-to-power-bi-image.png";
import customBIIcon from "../components/assets/icons/custom-power-bi-visual-icon-100px.png";
import customBIImage from "../components/assets/images/custom-power-bi-visual-image.png";
import azureBIIcon from "../components/assets/icons/azure-synapse-analytics-icon.png";
import azureBIImage from "../components/assets/images/azure-synapse-analytics-image.png";
const PowerBi = () => {
  return (
    <>
      <Banner image={PowerBiBanner} />
      <Powerheader
        logo={powerBiLogo}
        heading="Power BI"
        subheading="
       Expert Power BI strategy, development, and training consulting services"
        descriptionpart1=" Vertex is an early adopter and trusted partner with Power BI, a business
        analytics service that delivers insights to enable fast, informed
        decisions. We have been"
        descriptionbold="providing Microsoft Power BI consulting and development services since
        its inception in 2015"
        descriptionpart2="and will assist you in addressing your complex business intelligence and
        analytics needs leveraging Power BI to unleash the hidden potential of
        your data."
      />
      <div className=" px-3 BIMajorcard  z-1 ">
        <PowerMajorCard
          logo={newPowerBilogo}
          image={newPowerBiImage}
          heading="New Power BI Implementation"
          p1=" Since its inception in 2015, quickly Power BI has now become a leader in the BI & Analytics space with its unique cloud offering. With many customers looking to start their Power BI journey, we at Vertex have developed a proven methodology to assist our customers with this journey. Our team of Power BI experts will conduct a thorough assessment of your business scenarios and would put together an implementation plan tailor made for your data insights."
          p2=" Whether you are looking to replace your legacy BI or build a BI solution from ground up Vertex Power BI team have the expertise and experience to build enterprise level BI to meet your business needs. We are an end to end BI solution provider with expertise in data integration, data warehousing, data modeling and data visualization. "
          p3red=" Contact us"
          p3=" today for a free assessment and a Microsoft Power BI consultation plan from one of our expert PowerBI engineers."
        />
      </div>
      <div className="minorcardBI ">
        <Container className="p-3">
          <PowerminorCard
            logo={migrationBIIcon}
            image={migrationBIImage}
            heading="Migration To PowerBI"
            p1=" Customers have been using traditional on premise BI products such as SSRS, Tableau, Qlik, Microstrategy etc. for their BI needs since many years. Though these products have served the purpose for many years but their lack of vision to address modern BI needs and cost have forced the customers to look at Power BI, a 3rd generation self service modern BI product."
            p2=" Our experience with traditional BI products and Power BI has made us one of the most reliable partner for migration to Power BI. We have built a proven methodology to migrate your SSRS, Tableau, Qlik, Microstrategy BI reports and dashboards to Power BI platform."
            p3red="Contact us"
            p3=" today for a free evaluation of your current Power BI deployments and a Microsoft Power BI consultation plan for migration."
          />
          <hr />
          <PowerminorCard
            logo={customBIIcon}
            image={customBIImage}
            heading="Custom PowerBI visual development"
            p1="PowerBI provides a rich set of out of box visuals. But certain enterprise BI scenarios requires enhancement of out of box visuals or development of custom Power BI visuals from scratch. These challenging scenarios requires a partner with proven hands on experience with PowerBI visual development process"
            p2="Vertex expertise with custom PowerBI visual development and PowerBI makes it an ideal partner to develop custom visuals or enhance out of box PowerBI visuals. Our certified visual development and PowerBI team would work in collaboration with your data teams to define a plan and execute the same in time and within budget. "
            p3red="Contact us"
            p3="today for a free assessment and a Microsoft Power BI consultation plan from one of our expert PowerBI engineers."
          />
          <hr />
          <PowerminorCard
            logo={azureBIIcon}
            image={azureBIImage}
            heading=""
            p1="Certain enterprise BI scenarios require Power BI to leverage Azure Analytics Services such as Azure Data factory for integration, Azure Synapse for data management, Azure Analysis Services for data modeling and Azure Databricks for data science. These challenging scenarios requires a partner with proven Azure Analytics and Power BI expertise."
            p2="Vertex expertise with Azure Synapse Analytics and PowerBI makes it an ideal partner to setup enterprise BI architecture. Our certified Azure Analytics and PowerBI team would work in collaboration with your data teams to define a plan and execute the same in time and within budget."
            p3red="Contact us"
            p3="today for a free assessment of your architecture and an implementation plan."
          />
        </Container>
      </div>
    </>
  );
};

export default PowerBi;
