import React, { useEffect } from 'react';
import Slider from "react-slick";
import "../Sass&Css/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { collection,getFirestore, getDocs  } from "firebase/firestore"; 
import GalleryCard from '../UI/GalleryCard';

const MyWork = () => {
  const [works] = useState([])
  const [loading, setloading] = useState(true)
  const db = getFirestore();
  const colRef = collection(db, 'works')
  const [gallery, setgallery] = useState(false)

useEffect(() => {
  console.log(gallery)
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
       // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  


    var settings = {
        dots: true,
        centerMode: true,
        slidesToShow: 1,
        
      };
      return (
        <div className="container">
            My works

        <label className="switch">
      <input type="checkbox" onChange={() => setgallery(!gallery) }></input>
      <span className="slider round"></span>
        </label>
        {gallery ?  
        <div className='galleryMode'>
          {works.map((imgobj, index) => <GalleryCard imgobj={imgobj} key={index}/>)}
        </div>
          
          : 
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
}
      </div>
      );
}

export default MyWork;
