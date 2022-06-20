import React from 'react';
import Slider from "react-slick";
import "../Sass&Css/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {worksobj} from '../Works/index.js'


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
            worksobj.map((imgobj, index) =>{
                    return <div className='img' key={index}>
                        <p className='works__text'>
                           {imgobj.desc}
                        </p>
                        <img src={imgobj.img[Object.keys(imgobj.img)[0]]}  alt="my drawings"></img>
                        </div>
                   }) 
                }
       
        </Slider>
      </div>
      );
}

export default MyWork;
