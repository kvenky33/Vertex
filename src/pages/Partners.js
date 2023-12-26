import React from "react";
import PartnersInfo from "../components/PartnersInfo";
import PartnersBannerImage from "../components/assets/images/PartnersBanner Image.png";
import Banner from "../components/Banner";
import BlackContainer from "../components/BlackContainer";
const Partners = () => {
  return (
    <div>
      <Banner image={PartnersBannerImage} />
      <PartnersInfo />
      <BlackContainer
        para=" Vertex Consulting is an early adopter & trusted partner with
            Microsoft Services."
      />
    </div>
  );
};

export default Partners;
