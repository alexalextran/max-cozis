import React from 'react';
import {skills_proffecient, skills_learning} from '../Skills_Tech/index.js'
import SkillsCard from '../UI/SkillsCard';
import Plx from "react-plx";

const MySkills = () => {

    const scaleFactor = 1 / 30;
    function moveBackground(event) {
        const shapes = document.querySelectorAll(".skill_d");
        const x = event.clientX * scaleFactor;
        const y = event.clientY * scaleFactor;
      
        for (let i = 0; i < shapes.length; ++i) {
          const isOdd = i % 2 !== 0;
          const boolInt = isOdd ? -1 : 1;
          // Added rotate after tutorial
          shapes[i].style.transform = `translate(${y * boolInt}px, ${x * boolInt}px)`
        }
      }

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
          ]
        }
      ];
      
 

    
    return (
        <section className='skills' onMouseMove={moveBackground}>
            <Plx parallaxData={exampleParallaxData} className="plx">
            <div className='skills__left skill_d'>
                <h1>What I'm Proficient With</h1>
                <div className='cards'>
                {
                   skills_proffecient.map((skill, index) =>{
                    let { Image } = skill;
                    return <SkillsCard key={index} img={Image[skill.Name]} name={skill.Name} />
                   }) 
                }
                </div>
            
            </div>
            </Plx>

            <Plx parallaxData={exampleParallaxData} className="plx">
            <div className='skills__right skill_d'>
            <h1>What I'm planning to learn</h1>
            <div className='cards'>
            {
                   skills_learning.map((skill, index) =>{
                    let { Image } = skill;
                    return <SkillsCard key={index} img={Image[skill.Name]} name={skill.Name} />
                   }) 
                }
                </div>
            </div>
            </Plx>
            
        </section>
    );
}

export default MySkills;
