import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import PageHead from "../Components/PageHead";
import "../Styles/Global.css"

// Page Section Import Start
import Hero from "../Sections/Hero";
import Introduction from "../Sections/Introduction";
import Offer from "../Sections/Offer";
import Tour from "../Sections/Tour";
import WorkWithUs from "../Sections/WorkWithUs";
import ProjectsSection from "../Sections/ProjectsSection";
import CaptainsImplore from "../Sections/CaptainsImplore";
// import StaffSection from "../Sections/StaffSection";
// Page Section Import End

// import ManCigar from "../Assets/Images/Man-Cigar.jpeg"

const Home = () => {
  TabTitle("D & E | Home")
  return (
    <div className={"Page"}>
      <Hero  />
      <Introduction />
      <Offer />
      <WorkWithUs />
      <ProjectsSection />
      <Tour />
      <CaptainsImplore />
      {/* <StaffSection /> */}
    </div>
  );
};

export default Home;