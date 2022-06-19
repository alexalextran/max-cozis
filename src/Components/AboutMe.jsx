import React from 'react';
import Plx from "react-plx";
import aboutMe from '../Assets/aboutme.jpg'

const AboutMe = () => {

    
    const exampleParallaxData = [
        {
          start: 'self',
          duration: '50vh',
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

      const aboutmeLeft = [
        {
          start: 'self',
          duration: '50vh',
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

      const aboutmeRight = [
        {
          start: 'self',
          duration: '50vh',
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "opacity"
            },
            {
                startValue: 300,
                endValue: 0,
                property: "translateX"
              },
          ]
        }
      ];
      




    return (
        <section className='aboutMe' id='aboutMe'>
        <Plx parallaxData={exampleParallaxData} className="plx">
            <p>"Every great design begins with an even better story." -- Lorinda Mamo</p>
            </Plx>
            <div className='aboutMe-div'>
            <Plx parallaxData={aboutmeLeft} className="plx">
                <div className='aboutme-left'>
                    <h1>Think Creatively</h1>
                    <p>Hey I'm max a visual and graphic artist who specialises in xyz, I developed a passion for art and design when i was very young and now I'm looking to make a career out of it</p>
                    <button>Download My Resume</button>
                </div>
                </Plx>

                <Plx parallaxData={aboutmeRight}  className="plx">
                <div className='aboutme-right'>
                    <img src={aboutMe} alt="svg-illustration"></img>
                </div>
                </Plx>

            </div>
            



</section>
    );
}

export default AboutMe;
