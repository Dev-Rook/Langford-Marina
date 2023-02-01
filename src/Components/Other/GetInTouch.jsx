import React, { useState } from "react";
import "../../Styles/Imported-Styles/SocialIcon.scss";
import "../../Styles/Global.css"
import Styles from "../../Styles/Component-Styles/GetInTouch.module.scss";

// Material UI Icons Import Start
// import InstagramIcon from "@mui/icons-material/Instagram";
// import FacebookIcon from "@mui/icons-material/Facebook";
// import TwitterIcon from "@mui/icons-material/Twitter";
// import WhatsAppIcon from "@mui/icons-material/WhatsApp";
// Material UI Icons Import End

const GetInTouch = () => {
  return (
    <div className={"Section"}>
      <div className={Styles.Text_Box}>
        <p className={Styles.Title}>Contact Us?</p>

        <p className={Styles.Text}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nemo
          delectus hic non recusandae officiis magni at cumque, est saepe
          dolorem, fugit expedita culpa laboriosam ipsa.
        </p>
      </div>

      <div id="social-test">
        <ul className="social">
          <li>
            <i className="fa fa-facebook" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-twitter" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-instagram" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-vimeo" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-behance" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-dribbble" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-github" aria-hidden="true"></i>
          </li>
          <li>
            <i className="fa fa-pied-piper" aria-hidden="true"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default GetInTouch;