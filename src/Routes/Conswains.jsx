import React from 'react'
import { TabTitle } from "../Utilities/TabTitle";
import PageHead from "../Components/PageHead";
import "../Styles/Global.css"

import ConxswainsSyllabus from '../Sections/ConxswainsSyllabus';

const Conswains = () => {
  TabTitle("D & E | Coxswains")
  return (
    <div className={"Page"}>
      <ConxswainsSyllabus />
    </div>
  )
}

export default Conswains