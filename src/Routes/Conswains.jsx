import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import PageHeadMini from "../Components/PageHeadMini";
import "../Styles/Global.css";

import CaptainsSyllabus from "../Sections/CaptainsSyllabus";

const Conswains = () => {
  TabTitle("D & E | Coxswains");
  return (
    <div className={"Page"}>
      <PageHeadMini Image={""} Title={""} />
      <CaptainsSyllabus />
    </div>
  );
};

export default Conswains;
