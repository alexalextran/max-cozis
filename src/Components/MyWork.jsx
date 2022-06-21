import React, { useEffect } from 'react';
import Slider from "react-slick";
import "../Sass&Css/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {worksobj} from '../Works/index.js'
import { useState } from 'react';
import { collection,getFirestore, getDocs  } from "firebase/firestore"; 

const MyWork = () => {
  const [works, setworks] = useState([])
  const [loading, setloading] = useState(true)
  const db = getFirestore();
  const colRef = collection(db, 'works')

useEffect(() => {
  getDocs(colRef)
  .then((snapshot) => {
    
      snapshot.docs.forEach((doc) => {
       works.push({
          ID: doc.id,
           ...doc.data(),
       })})
      setloading(false)
     
      })
      .catch(err => {
          console.log(err.message)
  })
}, []);
  


    var settings = {
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        
      };
      return (
        <div className="container">
            My works
        <Slider {...settings}>
         
        {  loading ?  <p>Loading</p> :  
            works.map((imgobj, index) =>{
                    return <div className='img' key={index}>
                        <p className='works__text'>
                           {imgobj.Description}
                        </p>
                        <img src={imgobj.Image}  alt="my drawings"></img>
                        </div>
                   }) 
                }
       
        </Slider>
      </div>
      );
}

export default MyWork;
