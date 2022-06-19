import React from 'react';

const SkillsCard = ({img, name}) => {
    return (
        <div className='skillsCard'>
            <div className='img-wrapper'>
                <img src={img} alt="skill_svg"></img>
            </div>
            
            <p>
               {name}
            </p>
        </div>
    );
}

export default SkillsCard;
