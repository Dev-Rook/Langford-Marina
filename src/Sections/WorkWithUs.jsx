import React from "react";
import { Link } from "react-router-dom";
import useScrollUp from "../Hooks/useScrollUp";
import Styles from "../Styles/_ImploreSection.module.scss";

const WorkWithUs = () => {
  const { scrollUp } = useScrollUp();

  return (
    <div className={"Section"}>
      <div className={Styles.Content_Container}>
        <h1 className={Styles.Title}>Do You Have A Project In Mind?</h1>

        <p className={Styles.Description}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem nobis
          dignissimos sunt aut corporis dolor ab harum atque molestias
          molestiae.
        </p>

        <Link to={"/contact"}>
          <button onClick={scrollUp} className={Styles.Contact_Button}>
            Get In Touch
          </button>
        </Link>
      </div>
    </div>
  );
};

export default WorkWithUs;
