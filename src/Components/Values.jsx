import React from 'react';
import Plx from "react-plx";

const Values = () => {

    const heading1 = [
          {
            start: 'self',
            duration: '60vh',
            properties: [
              {
                startValue: 0,
                endValue: 1,
                property: "opacity",
              },
              {
                startValue: 100,
                endValue: 0,
                property: "translateY",
              },
             
            ],
          },
        ];
      const heading2 = [
        {
          start: 'self',
          duration: '60vh',
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "opacity"
            },
            {
                startValue: 100,
                endValue: 0,
                property: "translateY",
              },
          ]
        }
      ];
      const heading3 = [
        {
          start: 'self',
          duration: '60vh',
          properties: [
            {
              startValue: 0,
              endValue: 1,
              property: "opacity"
            },
            {
                startValue: 100,
                endValue: 0,
                property: "translateY",
              },
          ]
        }
      ];

    return (
        <section className='values' id="values">
               
               <Plx parallaxData={heading1}>
               <h1>“The role of the designer is that of a good, thoughtful host anticipating the needs of his guests.” – Charles Eames, designer, architect and filmmaker </h1>
               </Plx>

               <Plx parallaxData={heading2}>
               <h1>Art isn't just spurned on by circumstance or the natural talents of prodigies. It is cultivated and developed. It is a craft that is honed with unyielding dedication, tempered by discipline, and expressed in work.</h1>
               </Plx>

               <Plx parallaxData={heading3}>
               <h1>Some text goes here, max you can add this later, got too lazy lol</h1>
               </Plx>

        </section>
    );
}

export default Values;
