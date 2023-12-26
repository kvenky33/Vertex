import React from "react";
import "./Microsoft365Business.css";
import Banner from "../components/Banner";
import Microsoft365Businessbanner from "../components/assets/images/Microsoft365 BusinessBanner Image.png";
import M365header from "../components/M365header";
import business365logo from "../components/assets/images/business-central-logo-108px.png";
import business365image from "../components/assets/images/merged-business-central-video-image-small-size.png";
import MBusinessFeature from "../components/MBusinessFeature";
import oneIcon from "../components/assets/icons/one-icon-40px.svg";
import twoIcon from "../components/assets/icons/two-icon-40px.svg";
import threeIcon from "../components/assets/icons/three-icon-40px.svg";
import fourIcon from "../components/assets/icons/four-icon-40px.svg";
import yellowarrow from "../components/assets/icons/arrow-right-icon-40px.svg";

const Microsoft365Business = () => {
  return (
    <div>
      <Banner image={Microsoft365Businessbanner} />
      <M365header
        logo={business365logo}
        image={business365image}
        heading="Microsoft Dynamics 365 Business Central"
        headpara="Microsoft’s all-in-one business management solution for small and medium sized businesses is now available in the cloud as a robust, scalable solution to take your business to the next level."
        para1="Dynamics 365 Business Central brings the full power of Dynamics NAV to the cloud, as a modern solution for modern businesses. Business Central has at its foundation, a set of trusted, proven technologies in a single, end-to-end application."
        para2="The end-to-end solution give users a fresh, modern experience that is designed to optimize business processes and maximize productivity."
      />
      {/************************************ Business Central offers****************************************** */}

      <div className="BusinessCentral text-white p-5">
        <p className="features-heading pb-5">Business Central offers</p>
        <MBusinessFeature
          icon={oneIcon}
          head="Business without silos"
          para="Unify your business, and boost efficiency with automated tasks and
          workflows—all integrated within familiar Office tools like Outlook,
          Word, and Excel."
        />
        <MBusinessFeature
          icon={twoIcon}
          head="Actionable insights"
          para="Achieve greater outcomes and gain a complete view of your business with connected data, business analytics, and guidance delivered by Microsoft’s leading intelligent technologies."
        />
        <MBusinessFeature
          icon={threeIcon}
          head="Solutions built to evolve"
          para="Start quickly, grow at your own pace and adapt in real time with a flexible platform that makes it easy to extend Business Central based on your changing business needs."
        />
        <MBusinessFeature
          icon={fourIcon}
          head="Smarter sales"
          para="Prioritize sales leads based on revenue potential. Keep track of all customer interactions and get guidance on best upsell, cross-sell, and renewal opportunities throughout your sales cycle."
        />
      </div>

      {/****************************** Microsoft Dynamics Business Central Functionality************************* */}
      <div className="p-5">
        <p className="features-heading functionality-head pb-5">
          Microsoft Dynamics Business Central Functionality
        </p>
        <MBusinessFeature
          icon={yellowarrow}
          head="Financial Management"
          para="Including general ledger, workflows and audit trails, bank management, budgets, deferrals, bank reconciliation, dimensions, fixed assets, and currencies"
        />
        <MBusinessFeature
          icon={yellowarrow}
          head="Customer Relationship Management"
          para="Including contacts, campaigns, opportunity management, and built-in integration with Dynamics 365 for Sales."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head="Supply Chain Management"
          para="Including sales order management, basic receivables, purchase order management, locations, item transfers, and basic warehousing."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head="Human Resources"
          para="Including employees and management of their expenses."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head="Project Management"
          para="Including resources, estimates, jobs, and time sheets."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head="Other"
          para="Including multiple languages, reason codes, extended text, Intrastat reporting, scheduled tasks, and integration with Outlook."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head="Service Order Management"
          para="Including service orders, service price management, service item management, service contract management, planning and dispatching."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head="Manufacturing"
          para="Including production orders, version management, agile manufacturing, basic supply planning, demand forecasting, capacity planning, machine centers, and finite loading, bringing the full breadth of the popular Dynamics NAV application to the cloud."
        />
      </div>

      <div className="bg-dark text-white p-5">
        <div className="pb-5">
          <p className="features-heading ">
            <span className="clr-yellow"> Power BI</span> Integration in
            Dynamics 365 Business Central
          </p>
          <p className="text-center Integration-subhead">
            Build Intuitive, Insightful Power BI Reports in Business Central
          </p>
          <p className="text-center Integration-subhead">
            Endless Possibilities with Power BI
          </p>
          <p className="text-center Integration-subhead">
            Meet all the needs of your organization with a modern BI tool
          </p>
        </div>
        <MBusinessFeature
          icon={yellowarrow}
          head="Instant Deployment"
          para="Get setup in no time and start monitoring your data without any training. Get useful business insights from your data with our simple yet out-of-the-box dashboards."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head="Tap any Data source"
          para="Tap into any data source from an excel sheet to on-premise databases to get a holistic view of the key metrics for your business."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head="Real-time Insight"
          para="Gain real-time business insights and solve the problem as they occur or seize opportunities as they arise with Power BI dashboards."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head="Data Visualization"
          para="Visualize your data in the form of stunning, interactive graphs and charts using our interactive dashboards."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head=" Content Curation"
          para="Create & publish a personalized view of data as per your department or organization needs as a whole using the Power BI app."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head=" Data Collaboration"
          para="Use the Power BI group feature to collaborate with key stakeholders to ensure that everyone uses the right data and makes quick confident decisions."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head="Anytime, Anywhere "
          para="Access your data anytime, anywhere on the go with touch enable native apps for Windows, iOS and Android."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head="Seamless Integration"
          para="Integrate your application or services using our open, standards-based REST API seamlessly while focusing on your core value."
        />
        <MBusinessFeature
          icon={yellowarrow}
          head="Publish & Share"
          para="Combine data sources, create stunning visuals and publish your data story to the web, and reach millions of users."
        />
      </div>
    </div>
  );
};

export default Microsoft365Business;
