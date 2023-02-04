import React, { useState } from "react";
import "../Styles/Global.css";
import Styles from "../Styles/Section-Styles/CaptainsSyllabus.module.scss";
import MediaLink from "../Styles/_MediaLink.module.scss";

import AboutInfoData from "../Data/AboutInfo";

const AboutInfo = () => {
  const [data, setData] = useState(AboutInfoData);

  return (
    <div className={"Section_Slim"}>
      {data?.map((info) => {
        return (
          <div key={info.id}>
            <div className={Styles.Section_Image_Container}>
              <img src={info.Preview} alt="" className={Styles.Section_Image} />
            </div>

            <p className={Styles.Section_Title}>{info.Title}</p>
            <br />
            <hr />
            <br />
            <p className={Styles.Section_Description}>{info.Description}</p>
            <br />

            {/* <div className={MediaLink.Media_Link_Container}>
              <a href={info.Links.Substack} target={"_blank"} rel={"noreferrer"}>
                <span></span>
              </a>
              <a href={info.Links.YouTube} target={"_blank"} rel={"noreferrer"}>
                <span></span>
              </a>
              <a href={info.Links.Instagram} target={"_blank"} rel={"noreferrer"}>
                <span></span>
              </a>
            </div> */}
          </div>
        );
      })}
    </div>
  );
};



export default AboutInfo;
