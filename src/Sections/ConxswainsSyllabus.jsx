import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScrollUp from "../Hooks/useScrollUp";

import "../Styles/Global.css";
import Styles from "../Styles/Section-Styles/ConxswainsSyllabus.module.scss";
import Card_Styles from "../Styles/_ServiceCard.module.scss";

import Coxswains from "../Data/Coxswains.json";

const ConxswainsSyllabus = () => {
  const [data, setData] = useState(Coxswains);
  return (
    <div className={"Section_Slim"}>
      <div className={Styles.Section_Image_Container}>
        <img src={``} alt="" className={Styles.Section_Image} />
      </div>

      <p className={Styles.Section_Title}>Conxswains License Training</p>
      <p className={Styles.Section_Description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        voluptatem mollitia expedita officiis consequuntur at consequatur qui
        explicabo recusandae quae corrupti velit commodi, similique quibusdam
        amet placeat, consectetur asperiores minus sequi eveniet earum alias
        culpa doloremque accusantium. Ipsum numquam, mollitia quo aliquam et
        quod perspiciatis reprehenderit exercitationem soluta delectus dolorem.
      </p>

      <div className={Card_Styles.Content_Container}>
        {data.slice(0, 3).map((value) => {
          return (
            <div className={Card_Styles.Card} key={value.id}>
              <div className={Card_Styles.Image_Container}>
               <img src={value.Image} alt="" className={Card_Styles.Image} />
              </div>
              <div className={Card_Styles.Information_Box}>
                <p className={Card_Styles.Title}>{value.Title}</p>
                <p className={Card_Styles.Description}>{value.Description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ConxswainsSyllabus;
