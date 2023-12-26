import React from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import About from "./pages/About";
import Services from "./pages/Services";

import Partners from "./pages/Partners";
import Contacts from "./pages/Contacts";
import Microsoft365 from "./pages/Microsoft365";
import Microsoft365Business from "./pages/Microsoft365Business";
import MicrosoftNav from "./pages/MicrosoftNav";
import PowerApps from "./pages/PowerApps";
import PowerBi from "./pages/PowerBi";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/services" element={<Services />} />

        <Route
          path="/Solutions/MicrosoftDynamics-365"
          element={<Microsoft365 />}
        />
        <Route
          path="/Solutions/MicrosoftDynamics-365-Business-Central"
          element={<Microsoft365Business />}
        />
        <Route
          path="/Solutions/MicrosoftDynamics-365-NAV"
          element={<MicrosoftNav />}
        />
        <Route path="/Solutions/Power-Bi" element={<PowerBi />} />
        <Route path="/Solutions/Power-Apps" element={<PowerApps />} />
        <Route path="/partners" element={<Partners />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
