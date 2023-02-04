import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import PageHeadMini from "../Components/PageHeadMini";

import "../Styles/Global.css";
import Styles from "../Styles/Section-Styles/CaptainsSyllabus.module.scss";
import MediaLink from "../Styles/_MediaLink.module.scss";
import Card_Styles from "../Styles/_ServiceCard2.module.scss";

import Newsletter from "../Assets/Icons/Newsletter.png"
import YouTube from "../Assets/Icons/YouTube.png"
import Instagram from "../Assets/Icons/Instagram.png"

import ProjectData from "../Data/Projects.json";

const Projects = () => {
  TabTitle("D & E | Projects");
  const [data, setData] = useState(ProjectData);
  return (
    <div className={"Page"}>
      <PageHeadMini />
      <div className={"Section_Project"}>
        {data?.map((info) => {
          return (
            <div key={info.id}>
              <div className={Styles.Section_Image_Container}>
                <img
                  src={info.Preview}
                  alt=""
                  className={Styles.Section_Image}
                />
              </div>

              <p className={Styles.Section_Title}>{info.Title}</p>
              <br />
              <hr />
              <br />
              <p className={Styles.Section_Description}>{info.Description}</p>
              <br />

              <div className={MediaLink.Media_Link_Container}>
                <a
                  href={info.Links.Substack}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <img src={Newsletter} alt="" className={MediaLink.Icon} />
                </a>
                <a
                  href={info.Links.YouTube}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <img src={YouTube} alt="" className={MediaLink.Icon} />
                </a>
                <a
                  href={info.Links.Instagram}
                  target={"_blank"}
                  rel={"noreferrer"}
                >
                  <img src={Instagram} alt="" className={MediaLink.Icon} />
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
