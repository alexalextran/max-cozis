import React from 'react';
import {skills_proffecient, skills_learning} from '../Skills_Tech/index.js'
import SkillsCard from '../UI/SkillsCard';

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
      
 

    
    return (
        <section className='skills' onMouseMove={moveBackground}>
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
        </section>
    );
}

export default MySkills;
