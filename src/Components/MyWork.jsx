import React from 'react';
import Slider from "react-slick";
import "../Sass&Css/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import works from '../Works/index.js'


const MyWork = () => {
    var settings = {
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        
      };
      return (
        <div className="container">
            My works
        <Slider {...settings}>
         
        {
            works.map((img, index) =>{
                    return <div className='img'>
                        <p>
                            Hi i am text   Hi i am text   Hi i am text   Hi i am text   Hi i am text   Hi i am text   Hi i am text   Hi i am text   Hi i am text   Hi i am text   Hi i am text 
                        </p>
                        <img src={img}  alt="my drawings"></img>
                        </div>
                   }) 
                }
       
        </Slider>
      </div>
      );
}

export default MyWork;
