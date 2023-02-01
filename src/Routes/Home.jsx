import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import PageHead from "../Components/PageHead";
import "../Styles/Global.css"

// Page Section Import Start
import Introduction from "../Sections/Introduction";
import Offer from "../Sections/Offer";
import Tour from "../Sections/Tour";
import ProjectsSection from "../Sections/ProjectsSection";
import Coxswains from "../Sections/Coxswains";
import StaffSection from "../Sections/StaffSection";
// Page Section Import End

// import ManCigar from "../Assets/Images/Man-Cigar.jpeg"

const Home = () => {
  TabTitle("MBYC | Home");
  return (
    <div className={"Page"}>
      <PageHead Image={""} Title={"D & E Marina"} />
      <Introduction />
      <Offer />
      <ProjectsSection />
      <Tour />
      <Coxswains />
      <StaffSection />
    </div>
  );
};

export default Home;