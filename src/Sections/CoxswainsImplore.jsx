import React from "react";
import { Link } from "react-router-dom";
import useScrollUp from "../Hooks/useScrollUp";
import Styles from "../Styles/Section-Styles/CoxswainsImplore.module.scss";

const CoxswainsImplore = () => {
  const {scrollUp} = useScrollUp();
  return (
    <div className={"Section"}>
      <div className={Styles.Content_Container}>
        <h1 className={Styles.Title}>Interested In A Coxswains license?</h1>

        <p className={Styles.Description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis
          dignissimos sunt aut corporis dolor ab harum atque molestias
          molestiae.
        </p>

        <Link to={"coxswains"}>
          <button onClick={scrollUp} className={Styles.Contact_Button}>
            Learn More
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CoxswainsImplore;
