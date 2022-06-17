import React from 'react';

const SkillsCard = ({img, name}) => {
    return (
        <div className='skillsCard'>
            <img src={img} alt="skill_svg"></img>
            <p>
               {name}
            </p>
        </div>
    );
}

export default SkillsCard;
