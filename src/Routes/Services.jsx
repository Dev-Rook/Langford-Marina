import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import PageHeadMini from "../Components/PageHeadMini";
import "../Styles/Global.css";


import History from "../Sections/History";
import AboutIntroduction from "../Sections/AboutIntroduction";
import AboutInfo from "../Sections/AboutInfo";

const Services = () => {
  return (
    <div className={"Page"}>
      <PageHeadMini Image={""} Title={"Services"} />
      <AboutIntroduction />
      {/* <History /> */}
      <AboutInfo />
    </div>
  )
}

export default Services