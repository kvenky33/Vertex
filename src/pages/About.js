import React from "react";
import "./About.css";
import AboutBanner from "../components/assets/images/AboutBanner Image.png";
import Banner from "../components/Banner";
import QuoteMark from "../components/assets/images/quote-mark-100-86px.png";
import colorStrip from "../components/assets/images/Color Stripe.png";
import heatlthIcon from "../components/assets/icons/health-care-icon-175-150px.png";
import ManufactureIcon from "../components/assets/icons/manufacturing-icon-175-150px.png";
import warehouseIcon from "../components/assets/icons/warehouse-icon-175-150px.png";
import financeIcon from "../components/assets/icons/finance-icon-175-150px.png";

const About = () => {
  return (
    <div>
      <Banner image={AboutBanner} />
      <div className="container-fluid ">
        {/* ***********************About Us *************************************/}
        <div className="container aboutUs">
          <div className="row">
            <div className="col-12 col-md-6  d-flex  align-items-center">
              <p className="heading">About Us</p>
            </div>
            <div className="col-12 col-md-6 ">
              <p className=" para">
                As technology rapidly evolves, it’s more important than ever to
                have an innovation advisor on your side. Whether it’s time to
                create a new vision or put one into place, we can help you
                uncover the best technology to solve your toughest business
                problems - no matter the industry. We help you lead with
                innovation - inspired technology and agility while also
                energizing your legacy systems - at a pace that’s right for your
                business. Our consultants apply innovation to unlock trapped
                value within your organization, helping you embrace disruption
                and transform to lead in the future.
              </p>
            </div>
          </div>
        </div>
        {/* **********************************Our Mission************************************* */}

        <div className="container mission">
          <div className="row">
            <div className="col-12">
              <div className="d-flex flex-column flex-sm-row   gap-3">
                <img
                  src={QuoteMark}
                  alt="Quote-mark"
                  className="quote-mark mt-sm-3"
                />
                <div>
                  <p className="heading">Our Mission</p>

                  <img
                    src={colorStrip}
                    alt="colorStrip"
                    className="clr-strip "
                  />
                </div>
              </div>
            </div>

            <div className="col-12">
              <p className="para">
                Our mission is to deliver innovative and scalable IT solutions
                that add value to clients’ businesses. We provide
                customer-centric, result-oriented, cost-competitive, and
                functional products, which helps us retain lifelong
                relationships with our existing clients and expand our customer
                circle worldwide.
              </p>
            </div>
          </div>
        </div>

        {/* ********************************Technologuy adding values******************************************** */}
        <div>
          <div className="container technology">
            <div className="row">
              <div className="col-12 col-md-6  d-flex  align-items-center">
                <p className="heading">
                  Technology Adding Value to Your Business.
                </p>
              </div>
              <div className="col-12 col-md-6 ">
                <p className=" para">
                  Don’t let your legacy systems slow you down or stifle growth.
                  Pivot wisely to new technology and differentiating
                  capabilities while modernizing your legacy IT for innovation
                  at speed. Partner with us to apply new technology to address
                  some of your biggest business challenges and opportunities,
                  helping you grow your core business and build and scale new
                  offerings with innovation and agility. As your guide
                  throughout the transformation journey, we start with a
                  technology and ecosystem strategy to build a future-ready
                  foundation, then we develop a roadmap for change that
                  integrates with your workforce and business processes - all in
                  a highly secure environment.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*  ******************************************************************************************/}
      {/* *********************************Industries we work with************************************** */}

      <div className="container-fluid industries-Container">
        <div className="container industries">
          <p className="heading">Industries we work with</p>
          <div className="row justify-content-center  industries-content">
            <div className=" col-12 col-md-3 industry ">
              <div className="d-flex flex-column align-items-center gap-2">
                <img
                  src={heatlthIcon}
                  alt="health-icon"
                  className="industry-icon"
                />
                <p className="industry-name">Health Care</p>
              </div>
            </div>
            <div className="col-12 col-md-3 industry ">
              <div className="d-flex flex-column align-items-center gap-2">
                <img
                  src={ManufactureIcon}
                  alt="manufacture-icon"
                  className="industry-icon"
                />
                <p className="industry-name">Manufacturing</p>
              </div>
            </div>
            <div className="col-12 col-md-3 industry  ">
              <div className="d-flex flex-column align-items-center gap-2">
                <img
                  src={warehouseIcon}
                  alt="warehouse-icon"
                  className="industry-icon"
                />
                <p className="industry-name">warehouse &Distribution</p>
              </div>
            </div>
            <div className="col-12 col-md-3 industry  ">
              <div className="d-flex flex-column align-items-center gap-2 ">
                <img
                  src={financeIcon}
                  alt="finance-icon"
                  className="industry-icon"
                />
                <p className="industry-name">Finance</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ****************************************Our Values****************************************** */}
      <div className="container-fluid  ourvalues">
        <div className="container ourvalues-container">
          <p className="values-head">Our values</p>
          <img src={colorStrip} alt="clr-strip" className="clr-strip" />

          <div className="row justify-content-center values">
            <div className="col-12 col-sm-6 col-md-4 value-Item">
              <p>
                <span className="value-name">Be open-minded </span>
                <br />
                <span className="value-subname">
                  Explore, learn and develop
                </span>
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 value-Item">
              <p>
                <span className="value-name">Be focused on results </span>
                <br />
                <span className="value-subname">Work and Achieve</span>
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 value-Item">
              <p>
                <span className="value-name">Put your team first </span>
                <br />
                <span className="value-subname">
                  Team results over personal ambitions
                </span>
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 value-Item">
              <p>
                <span className="value-name">Be client-oriented </span>
                <br />
                <span className="value-subname">
                  Build long-term & reliable relationships with partners
                </span>
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 value-Item">
              <p>
                <span className="value-name">Be honest </span>
                <br />
                <span className="value-subname">
                  Be honest with yourself, your team and your client
                </span>
              </p>
            </div>
            <div className="col-12 col-sm-6 col-md-4 value-Item">
              <p>
                <span className="value-name">Be fulfilled </span>
                <br />
                <span className="value-subname">Enjoy and Inspire</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
