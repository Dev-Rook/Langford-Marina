import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScrollUp from "../Hooks/useScrollUp";

import "../Styles/Global.css";
import Sec_Title_Styles from "../Styles/_SectionTitle.module.scss";
import Card_Styles from "../Styles/_CardGrid.module.scss";

import Offerdata from "../Data/Offer.json";

const Offer = () => {
  const [data, setData] = useState(Offerdata);
  return (
    <div className={"Section_Slim"}>
      <div className={Sec_Title_Styles.Section_Title_Container}>
        <p className={Sec_Title_Styles.Question}>Services</p>
        <p className={Sec_Title_Styles.Section_Title}>What We Offer</p>
      </div>

      <div className={Card_Styles.Content_Container}>
        {data &&
          data.map((value) => {
            return (
              <div className={Card_Styles.Card} key={value.id}>
                <img src={value.Icon} alt="" className={Card_Styles.Icon} />
                {/* <p className={Card_Styles.Title}>{value.Title}</p>
                <p className={Card_Styles.Description}>{value.Description}</p> */}
              </div>
            );
          })}
      </div>
    </div>
  );
};

export default Offer;
