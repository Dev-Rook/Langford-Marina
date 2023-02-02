import React from "react";

import "../Styles/Global.css";
import Sec_Title_Styles from "../Styles/_SectionTitle.module.scss";
import Styles from "../Styles/Section-Styles/History.module.scss";

import TimelineAlternate from "../Components/Other/TimelineAlternate";
import TimelineRight from "../Components/Other/TimelineRight";

const History = () => {
  return (
    <div className={"Section"}>
      <div className={Sec_Title_Styles.Section_Title_Container}>
        <p className={Sec_Title_Styles.Question}>History</p>
        <p className={Sec_Title_Styles.Section_Title}>Company Timeline</p>
      </div>

      <div className={Styles.Timeline_Alternate}>
        <TimelineAlternate />
      </div>

      <div className={Styles.Timeline_Right}>
        <TimelineRight />
      </div>
    </div>
  );
};

export default History;
