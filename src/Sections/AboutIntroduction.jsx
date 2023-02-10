import React, { useState } from "react";

import "../Styles/Global.css";
import Styles from "../Styles/Section-Styles/CaptainsSyllabus.module.scss";
import Card_Styles from "../Styles/_ServiceCard2.module.scss";

import Offerdata from "../Data/Offer.json";

const AboutIntroduction = () => {
  const [data, setData] = useState(Offerdata);
  return (
    <div className={"Section_Slim"}>
      <div className={Styles.Section_Image_Container}>
        <img src={``} alt="" className={Styles.Section_Image} />
      </div>

      <p className={Styles.Section_Title}>Work Platforms</p>
      <p className={Styles.Section_Description}>
        D&E Marine Ltd’s work is based off a shallow water draught, twin
        outboard engined Bhuler 42 workboat platform registered as “The Kraken”.
        The vessel can deliver services to any navigable location islandwide
        (weather conditions pending). The vessel is configured with an aluminium
        A-frame and a lift out hatch at the bow, along with an electric winch,
        all of which facilitate lifting and beaching
      </p>

      <div className={Card_Styles.Content_Container}>
        {data &&
          data.map((value) => {
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

export default AboutIntroduction;
