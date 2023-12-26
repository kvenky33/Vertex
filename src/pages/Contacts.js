import React from "react";

import Banner from "../components/Banner";
import contantsBanner from "../components/assets/images/ContactsBanner Image.png";
import ContactForm from "../components/ContactForm";

const Contacts = () => {
  return (
    <>
      <Banner image={contantsBanner} />
      <ContactForm />
    </>
  );
};

export default Contacts;
