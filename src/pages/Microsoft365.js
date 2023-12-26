import React from "react";
import Banner from "../components/Banner";
import Microsoft365banner from "../components/assets/images/Microsoft 365Banner Image.png";
import BlackContainer from "../components/BlackContainer";
import M365header from "../components/M365header";
import m365Logo from "../components/assets/images/dynamics-365-logo-108px.png";
import m365Image from "../components/assets/images/merged-dynamics-365-video-image-small-size.png";
import Toolscontainer from "../components/ToolsContainer";
import ChooseMD365 from "../components/ChooseMD365";
import MD365Features from "../components/MD365Features";
const Microsoft365 = () => {
  return (
    <div>
      <Banner image={Microsoft365banner} />
      <MD365Features/>
      <div className="bg-light">
        <M365header
          logo={m365Logo}
          image={m365Image}
          heading="Microsoft Dynamics 365"
          subheading="is a unique cloud based solution"
          headpara="that provides you with everything you require in terms of operations and
        customer relations management."
          para1="Combining the digital intelligence of Microsoft Dynamics CRM and the
        business processes of Microsoft Dynamics ERP, Microsoft Dynamics 365
        helps your team make better decisions and meet the demands of your
        growing business."
          para2="As the demands of your growing business change you can easily add
        application to meet those challenges while taking advantage of the
        competitive price points of Microsoft Dynamics 365."
        />
      </div>
      <BlackContainer para="Microsoft Dynamics 365 is the complete solution for your teams in Sales, Marketing, Operations, Finance, and Project Management." />
      <Toolscontainer />
      <ChooseMD365 />
    </div>
  );
};

export default Microsoft365;
