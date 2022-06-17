import React from 'react';
import LandingPageVideo from '../Assets/landingPage-MC.mp4'
import {MdKeyboardArrowDown} from 'react-icons/md'

const LandingPage = () => {

  


  document.body.addEventListener("scroll", function(event) {
    var opacity = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
    var scale = (document.body.offsetHeight - document.body.scrollTop) / document.body.offsetHeight;
    document.documentElement.style.setProperty('--headerOpacity', opacity);
    document.documentElement.style.setProperty('--headerScale', scale);
  });

    return (
        <header className="video-header">
  <video src={LandingPageVideo}   
          muted
          autoPlay={"autoplay"}
          preload="auto"
          loop></video>
  <div class="viewport-header">
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
