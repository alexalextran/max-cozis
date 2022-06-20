import React from 'react';
import Slider from "react-slick";
import "../Sass&Css/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const MyWork = () => {
    var settings = {
        dots: true,
        centerMode: true,
        slidesToShow: 3,
        
      };
      return (
        <div className="container">
        <Slider {...settings}>
         
        <div>
        <h3>Slide1</h3>
      </div>
      <div>
        <h3>Slide2</h3>
      </div>
      <div>
        <h3>Slide3</h3>
      </div>
      <div>
        <h3>Slide4</h3>
      </div>
      <div>
        <h3>Slide5</h3>
      </div>
      <div>
        <h3>Slide6</h3>
      </div>
       
        </Slider>
      </div>
      );
}

export default MyWork;
