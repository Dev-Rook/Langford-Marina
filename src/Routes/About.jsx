import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import "../Styles/Global.css";

import History from "../Sections/History"
import YouTubeBox from "../Components/Other/YouTubeBox";

const About = () => {
  TabTitle("D & E | About");
  return (
    <div className={"Page"}>
      <History />
      <YouTubeBox />
    </div>
  );
};

export default About;
