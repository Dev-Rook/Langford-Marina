import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScrollUp from "../Hooks/useScrollUp";

import "../Styles/Global.css";
import Styles from "../Styles/Section-Styles/Coxswains.module.scss";
import Sec_Title_Styles from "../Styles/_SectionTitle.module.scss";
import Card_Styles from "../Styles/_CardGrid.module.scss";

import Tour from "../Data/Tour.json";

const Coxswains = () => {
  const [data, setData] = useState(Tour);
  return (
    <div className={"Section_Slim"}>
      <div className={Styles.Section_Image_Container}>
        <img src={``} alt="" className={Styles.Section_Image} />
      </div>

      <p className={Styles.Section_Title}>Coxswians License</p>
      <p className={Styles.Section_Description}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        voluptatem mollitia expedita officiis consequuntur at consequatur qui
        explicabo recusandae quae corrupti velit commodi, similique quibusdam
        amet placeat, consectetur asperiores minus sequi eveniet earum alias
        culpa doloremque accusantium. Ipsum numquam, mollitia quo aliquam et
        quod perspiciatis reprehenderit exercitationem soluta delectus dolorem.
      </p>

      <div className={Card_Styles.Content_Container}>
        {data.map((value) => {
          return (
            <div className={Card_Styles.Card} key={value.id}>
              <img src={value.Icon} alt="" className={Card_Styles.Icon} />
              {/* <p className={Styles.Title}>{value.Title}</p>
                <p className={Styles.Description}>{value.Description}</p> */}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Coxswains;
