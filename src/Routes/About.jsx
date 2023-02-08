import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import PageHeadMini from "../Components/PageHeadMini";
import "../Styles/Global.css";

import YouTubeBox from "../Components/Other/YouTubeBox";

const About = () => {
  TabTitle("D & E | About");
  return (
    <div className={"Page"}>
      <PageHeadMini Title={"About Us"} />
      <YouTubeBox />
    </div>
  );
};

export default About;
