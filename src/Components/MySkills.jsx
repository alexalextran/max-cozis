import React from 'react';
import Skills_Tech from '../Skills_Tech'

const MySkills = () => {

var { Image } = Skills_Tech[0]
    console.log(Image[ Skills_Tech[0].Name])
    
 

    
    return (
        <section className='skills'>
            <div className='skills__left'>
                <h1>What I'm Profecient With</h1>
            
             <img  src= {Image[ Skills_Tech[0].Name]}></img>
            </div>
            <div className='skills__right'>
            <h1>What I'm planning to learn</h1>
          

            </div>
        </section>
    );
}

export default MySkills;
