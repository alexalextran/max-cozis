import React from 'react';
import LandingPageVideo from '../Assets/landingPage-MC.mp4'
import {MdKeyboardArrowDown} from 'react-icons/md'

const LandingPage = () => {

    return (
        <section className="video-header" id="video-header">
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
</section>
    );
}

export default LandingPage;
