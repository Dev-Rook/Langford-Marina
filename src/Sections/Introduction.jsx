import React from "react";
import { Link } from "react-router-dom";
import useScrollUp from "../Hooks/useScrollUp";
import "../Styles/Global.css";
import Styles from "../Styles/Section-Styles/Introduction.module.scss";

const Introduction = () => {
  const { scrollUp } = useScrollUp();
  return (
    <div className={"Section"}>
      <div className={Styles.Content_Container}>
        <div className={Styles.About_Container}>
          <p className={Styles.Question}>Who We Are</p>
          <p className={Styles.Brand}>D & E Marina</p>
          <p className={Styles.Description}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam,
            consectetur? Voluptates placeat nesciunt rem doloribus quae eos
            libero eveniet et.
          </p>

          <Link to={"About"}>
            <button onClick={scrollUp} className={Styles.Read_More_Button}>
              Read More
            </button>
          </Link>
        </div>
        <div className={Styles.Image_Container}>
          <img
            src={
              "https://github.com/Dev-Rook/yacht-club/blob/master/src/Assets/Images/ClubFlag.jpeg?raw=true"
            }
            alt=""
            className={Styles.Image}
          />
        </div>
      </div>
    </div>
  );
};

export default Introduction;
