import React from "react";
import Styles from "../../Styles/Component-Styles/Map.module.scss";

const Map = () => {
  return (
    <div className={Styles.Section}>
      <iframe
        title="Map"
        width="100%"
        height="100%"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=18.520500,%20-77.870149&t=&z=17&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
      ></iframe>
    </div>
  );
};

export default Map;
