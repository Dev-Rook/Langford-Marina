import React from "react";
import { motion } from "framer-motion";
import Styles from "../Styles/Component-Styles/PageHead.module.scss";

import Image from "../Assets/Images/Seaview Diving Bell.jpg"

const PageHead = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <p className={Styles.Large_Text}>D&E Marine</p>
      </div>

      <div className={Styles.Diffuser}></div>

      <div className={Styles.Background_Container}>
        {/* <video
          src={Video}
          className={Styles.Background_Video}
          autoPlay
          loop
          muted
        ></video> */}

        <img src={Image} alt="" className={Styles.Background_Video} />
      </div>
    </div>
  );
};

export default PageHead;