import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import logo from '../Assets/punpun-transparent.png'
import Plx from "react-plx";

const Contact = () => {


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
          startValue: 100,
          endValue: 0,
          property: "translateY"
        },
      ]
    }
  ];
  const title = [
    {
      start: 'self',
      duration: '30vh',
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

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

//EmailJs Function (todo whenever client is ready)
const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

//   emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
//     .then((result) => {
//         console.log(result.text);
//     }, (error) => {
//         console.log(error.text);
//     });
 };


    return (
        <section className='contact' id="contact">
             
             <Plx parallaxData={title} className="plx">
            <h2 className='contact__title'>
              Don't Be Afraid To Send Me A Message!
            </h2>
            </Plx>

            <Plx parallaxData={exampleParallaxData} className="plx">
<div>
  <div className="card cardLeft">
    <form ref={form} onSubmit={sendEmail}>
    <h1>Startup <span>Cinema</span></h1>
    <div className="title">
      <input placeholder='Email...' name="user_email"></input>
      <span>movie</span>
    </div>
    <div className="name">
    <input placeholder='Name...' name="user_name"></input>
      <span>Director</span>
    </div>
    <div className='description'>
       <textarea className='description__textarea' placeholder='Message...' name="message"></textarea> 
       <span>Description</span>
    </div>
    <div className="button">
    <button>Send it my way</button>
    </div>
    </form>
    <div className="seat">
      <h2>156</h2>
      <span>seat</span>
    </div>
    <div className="time">
      <h2>{time}</h2>
      <span>time</span>
    </div>
  </div>


  <div className="card cardRight">
    <img src={logo} alt="logo"></img>
    <div className="number">
      <h3>156</h3>
      <span>seat</span>
    </div>
    <div className="barcode"></div>
  </div>
  </div>
  </Plx>


        </section>
    );
}

export default Contact;
