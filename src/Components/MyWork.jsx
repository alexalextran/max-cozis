import React, { useEffect } from 'react';
import Slider from "react-slick";
import "../Sass&Css/index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';
import { collection,getFirestore, getDocs  } from "firebase/firestore"; 
import GalleryCard from '../UI/GalleryCard';
import MyWorks from '../UI/MyWorks';
import { useTransition, animated } from 'react-spring';

const MyWork = () => {
  const [works] = useState([])
  const [loading, setloading] = useState(true)
  const db = getFirestore();
  const colRef = collection(db, 'works')
  const [gallery, setgallery] = useState(false)

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
       // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
  


    var settings = {
        dots: true,
        centerMode: true,
        slidesToShow: 1,
      };
      
      const transition = useTransition(gallery, {
        from:{x: 0, y: -10, opacity: 0},
        enter:{x: 0, y: 0, opacity: 1},
        laeve:{x: 0, y: 10, opacity: 0},
       
    })
      return (
        <section className="container">
           <div className='myworks__header'>
            <h1>My Works</h1>
            <h3>Gallery Mode</h3>
            
            <label className="switch">
      <input type="checkbox" onChange={() => setgallery(!gallery) }></input>
      <span className="slider round"></span>
        </label>
            </div>

      
        {gallery ?
        <>
          {transition((style, item) =>
            <animated.span style = {style}> 
          <div className='galleryMode'>
          {works.map((imgobj, index) => <GalleryCard imgobj={imgobj} key={index}/>)}
        </div>
            </animated.span>
            )}
        </>
      
    
          : 
          <>
          {transition((style, item) =>
            <animated.span style = {style}> 
          <Slider {...settings}>
        { loading ? <p>Loading</p> :  works.map((imgobj, index) => <MyWorks imgobj={imgobj} key={index}/>)}
        </Slider>
            </animated.span>
            )}
            </>
  
        }
        
      </section>
      );
}

export default MyWork;
