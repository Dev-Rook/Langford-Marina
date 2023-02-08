import React from "react";
import Styles from "../Styles/Section-Styles/Hero.module.scss";

const Video = "Dog Water";
const Image = "Dog Water";

const Hero = () => {
  return (
    <div className={Styles.Section}>
      <div className={Styles.Hero_Content_Container}>
        <img src={Image} alt="" className={Styles.Image} />
        <video src={Video} className={Styles.Video}></video>
      </div>
    </div>
  );
};

export default Hero;
