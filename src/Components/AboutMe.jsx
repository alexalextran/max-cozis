import React from 'react';
import Plx from "react-plx";

const AboutMe = () => {
    const exampleParallaxData = [
        {
          start: '0',
          duration: 500,
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "opacity"
            },
            {
                startValue: -300,
                endValue: 0,
                property: "translateX"
              },
          ]
        }
      ];
      




    return (
        <section className='aboutMe'>
        <Plx parallaxData={exampleParallaxData}>
            <p>"Every great design begins with an even better story." -- Lorinda Mamo</p>
            </Plx>
            <div className='aboutMe-div'>
                <div className='aboutme-left'>
                    <h1>Think Creatively</h1>
                    <p>Hey I'm max a visual and graphic artist who specialises in xyz, I developed a passion for art and design when i was very young and now I'm looking to make a career out of it</p>
                    <button>Download My Resume</button>
                </div>
                <div className='aboutme-right'>
                    <img></img>
                </div>
            </div>
            



</section>
    );
}

export default AboutMe;
