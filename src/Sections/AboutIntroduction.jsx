import React from "react";
import Styles from "../Styles/_ImploreSection.module.scss";

import YouTubeBox from "../Components/Other/YouTubeBox"

const AboutIntroduction = () => {
  return (
    <div className={"Section"}>
      <div className={Styles.Content_Container}>
        <h1 className={Styles.Title}>Work Platform</h1>

        <p className={Styles.Description}>
          D&E Marine Ltd’s work is based off a shallow water draught, twin
          outboard engined Bhuler 42 workboat platform registered as “The
          Kraken”. The vessel can deliver services to any navigable location
          islandwide (weather conditions pending). The vessel is configured with
          an aluminium A-frame and a lift out hatch at the bow, along with an
          electric winch, all of which facilitate lifting and beaching.
        </p>

        <YouTubeBox />
      </div>
    </div>
  );
};

export default AboutIntroduction;
