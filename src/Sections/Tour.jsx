import React, { useState } from "react";
import { Link } from "react-router-dom";
import useScrollUp from "../Hooks/useScrollUp";

import "../Styles/Global.css";
import Sec_Title_Styles from "../Styles/_SectionTitle.module.scss";
import Card_Styles from "../Styles/_TourCard.module.scss";

import TourData from "../Data/Tour.json";

const Tour = () => {
  const [data, setData] = useState(TourData);
  return   <div className={"Section_Slim"}>
  <div className={Sec_Title_Styles.Section_Title_Container}>
   <p className={Sec_Title_Styles.Question}>Walkaround</p>
   <p className={Sec_Title_Styles.Section_Title}>Tour Our Facilities</p>
 </div>

 <div className={Card_Styles.Content_Container}>
   {data &&
     data.map((value) => {
       return (
        <a
        href={value.Link}
        rel={"noreferrer"}
        target={"_blank"}
        key={value.id}
      >
        <div className={Card_Styles.Card}>
          <div className={Card_Styles.Preview_Container}>
            <img
              src={value.Preview}
              alt=""
              className={Card_Styles.Preview}
            />
            <p className={Card_Styles.Title}>{value.Title}</p>
          </div>

          <div className={Card_Styles.Description_Container}>
            <p className={Card_Styles.Description}>{value.Description}</p>
          </div>
        </div>
      </a>
       );
     })}
 </div>
</div>;
};

export default Tour;
