import React from "react";

import "../../Styles/Imported-Styles/_YouTubePlayButton.css";
import Styles from "../../Styles/_YouTubeBox.module.scss";

import Image from "../../Assets/Images/Carbon Claws.png"

const YouTubeBox = () => {
  return (
    <div className={Styles.Card}>
      <img src={Image} alt="" className={Styles.Image} />
      <video src={""} className={Styles.Video}></video>
      <a id="play-video" className="video-play-button" href={`https://youtube.com`} target={"_blank"} rel={"nore ferrer"}>
        <span></span>
      </a>
    </div>
  );
};

export default YouTubeBox;
