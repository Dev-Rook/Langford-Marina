import React from "react";
import { TabTitle } from "../Utilities/TabTitle";
import PageHead from "../Components/PageHead";
import "../Styles/Global.css"

import PageHeadMini from "../Components/PageHeadMini";
import ContactForm from "../Components/Other/ContactForm";

const Contact = () => {
  return (
    <div className={"Page"}>
      <PageHeadMini />
      <ContactForm />
    </div>
  )
}

export default Contact