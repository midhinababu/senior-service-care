import React from "react";
import Headers from "../components/headers";
import Services from "../components/Services";
import MissionVision from "../components/missionvission";
import TrustQuality from "../components/TrustQuality";
import FeaturesSection from "../components/Fectures";
import Footer from "../components/Footer";

function Landingpage() {
  return (
    <>
      <Headers/>
      <Services />

      <MissionVision />
      <TrustQuality />
      <FeaturesSection />

      <Footer />
    </>
  );
}

export default Landingpage;
