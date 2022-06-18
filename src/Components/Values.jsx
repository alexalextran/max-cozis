import React from 'react';
import Plx from "react-plx";

const Values = () => {

    const heading1 = [
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

    return (
        <section className='values'>
               
               <Plx parallaxData={heading1}>
               <h1>“The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.” – Charles Eames, designer, architect and filmmaker </h1>
               </Plx>

               <Plx parallaxData={heading1}>
               <h1>I believe good art isn't what comes forth from natural talent, but comes across from hard work and</h1>
               </Plx>

               <Plx parallaxData={heading1}>
               <h1>Some text goes here, max you can add this later, got too lazy lol</h1>
               </Plx>

        </section>
    );
}

export default Values;
