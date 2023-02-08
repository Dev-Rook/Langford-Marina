import React from 'react'

import "../../Styles/Imported-Styles/_YouTubePlayButton.css"
import Styles from "../../Styles/_YouTubeBox.module.scss"

const YouTubeBox = () => {
  return (
    <div className={Styles.Card}>
      <a id="play-video" class="video-play-button" href="#">
  <span></span>
</a>
    </div>
  )
}

export default YouTubeBox