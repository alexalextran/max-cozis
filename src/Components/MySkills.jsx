import React from 'react';
import {skills_proffecient} from '../Skills_Tech/index.js'
import SkillsCard from '../UI/SkillsCard';

const MySkills = () => {

    
 

    
    return (
        <section className='skills'>
            <div className='skills__left'>
                <h1>What I'm Profecient With</h1>
                <div className='cards'>
                {
                   skills_proffecient.map((skill, index) =>{
                    let { Image } = skill;
                    return <SkillsCard key={index} img={Image[skill.Name]} name={skill.Name} />
                   }) 
                }
                </div>
            
            </div>
            <div className='skills__right'>
            <h1>What I'm planning to learn</h1>
          

            </div>
        </section>
    );
}

export default MySkills;
