import React from 'react'
import { TabTitle } from "../Utilities/TabTitle";
import PageHead from "../Components/PageHead";
import "../Styles/Global.css"

import CaptainsSyllabus from '../Sections/CaptainsSyllabus';

const Conswains = () => {
  TabTitle("D & E | Coxswains")
  return (
    <div className={"Page"}>
      <CaptainsSyllabus />
    </div>
  )
}

export default Conswains