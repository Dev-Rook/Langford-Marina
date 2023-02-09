import React from "react";
import Styles from "../Styles/Section-Styles/Hero.module.scss";

import Image from "../Assets/Images/Solstad Offshore secures AHTS contracts in Brazil - Splash247.jpg"

const Hero = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Content_Container}>
        <p className={Styles.Large_Text}>D&E Marine</p>
      </div>

      <div className={Styles.Diffuser}></div>

      <div className={Styles.Background_Container}>
      <img src={Image} alt="" className={Styles.Image} />
        <video
          src={``}
          className={Styles.Background_Video}
          autoPlay
          loop
          muted
        ></video>
      </div>
    </div>
  );
};

export default Hero;