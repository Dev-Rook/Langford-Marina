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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
        voluptatem mollitia expedita officiis consequuntur at consequatur qui
        explicabo recusandae quae corrupti velit commodi, similique quibusdam
        amet placeat, consectetur asperiores minus sequi eveniet earum alias
        culpa doloremque accusantium. Ipsum numquam, mollitia quo aliquam et
        quod perspiciatis reprehenderit exercitationem soluta delectus dolorem.
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
