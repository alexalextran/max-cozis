import React from 'react';
import LandingPageVideo from '../Assets/landingPage-MC.mp4'
import {MdKeyboardArrowDown} from 'react-icons/md'

const LandingPage = () => {

    return (
        <header className="video-header">
  <video src={LandingPageVideo}   
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop></video>
  <div className="viewport-header">
    <h2>
      <span>Max Cozis</span>
      Graphic Composer 
    </h2>
    <MdKeyboardArrowDown size="2rem" className='arrow'/>
  </div>
</header>
    );
}

export default LandingPage;
