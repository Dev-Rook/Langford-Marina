import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import PageHead from "../Components/PageHead";
import "../Styles/Global.css";

import History from "../Sections/History";
import AboutIntroduction from "../Sections/AboutIntroduction";
import AboutInfo from "../Sections/AboutInfo";

const About = () => {
  TabTitle("D & E | About");
  return (
    <div className={"Page"}>
      <PageHead Image={""} Title={"About D & E"} />
      <AboutIntroduction />
      {/* <History /> */}
      <AboutInfo />
    </div>
  );
};

export default About;
