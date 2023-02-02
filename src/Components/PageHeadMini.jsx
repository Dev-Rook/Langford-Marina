import React from 'react'
import Styles from "../Styles/Component-Styles/PageHeadMini.module.scss";

const PageHeadMini = ({ Image, Title, Video }) => {
  return (
    <div className={Styles.Section}>
    <div className={Styles.Content_Container}>
      <p className={Styles.Large_Text}>{Title}</p>
    </div>

    <div className={Styles.Diffuser}></div>

    <div className={Styles.Background_Container}>
      {/* <video
        src={Video}
        className={Styles.Background_Video}
        autoPlay
        loop
        muted
      ></video> */}

      <img src={Image} alt="" className={Styles.Background_Video} />
    </div>
  </div>
  )
}

export default PageHeadMini