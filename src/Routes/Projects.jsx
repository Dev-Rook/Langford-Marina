import React, { useState } from "react";
import { TabTitle } from "../Utilities/TabTitle";
import PageHeadMini from "../Components/PageHeadMini";

import "../Styles/Global.css";
import Styles from "../Styles/Section-Styles/CaptainsSyllabus.module.scss";
import MediaLink from "../Styles/_MediaLink.module.scss";
import Card_Styles from "../Styles/_ProjectCard.module.scss";

import Newsletter from "../Assets/Icons/Newsletter.png";
import YouTube from "../Assets/Icons/YouTube.png";
import Instagram from "../Assets/Icons/Instagram.png";

import ProjectData from "../Data/Projects.json";

const Projects = () => {
  TabTitle("D & E | Projects");
  const [data, setData] = useState(ProjectData);
  return (
    <div className={"Page"}>
      <PageHeadMini />
      <div className={"Section_Project"}>
        {data?.slice(0, 3).map((info) => {
          return (
            <div className={Card_Styles.Card}>
              <div className={Card_Styles.Image_Container}>
                <img src="" alt="" className={Card_Styles.Image} />
              </div>

              <div className={Card_Styles.Information_Box}>
                <p className={Card_Styles.Title}>Lorem ipsum dolor sit amet.</p>
                <p className={Card_Styles.Text}>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed
                  reprehenderit soluta nostrum recusandae, natus voluptatibus
                  neque, quas unde necessitatibus, animi nam non quam aliquid
                  distinctio....
                </p>

                <div className={Card_Styles.Links_Container}>
                  <a
                    href={info.Links.Substack}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <p className={Card_Styles.Text}>Substack</p>
                  </a>
                  |
                  <a
                    href={info.Links.YouTube}
                    target={"_blank"}
                    rel={"noreferrer"}
                  >
                    <p className={Card_Styles.Text}>YouTube</p>
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
