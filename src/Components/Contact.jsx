import React from 'react';
import logo from '../Assets/punpun-transparent.png'

const Contact = () => {

var today = new Date();
var time = today.getHours() + ":" + today.getMinutes();

    return (
        <section className='contact'>

            <h2 className='contact__title'>Don't Be Afrait To Send Me A Message!
            </h2>
<div>
  <div className="card cardLeft">
    <form>
    <h1>Startup <span>Cinema</span></h1>
    <div className="title">
      <input placeholder='Email...'></input>
      <span>movie</span>
    </div>
    <div className="name">
    <input placeholder='Name...'></input>
      <span>Director</span>
    </div>
    <div className='description'>
       <textarea className='description__textarea' placeholder='Message...'></textarea> 
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


        </section>
    );
}

export default Contact;
