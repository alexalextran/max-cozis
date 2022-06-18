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
  <div class="card cardLeft">
    <form>
    <h1>Startup <span>Cinema</span></h1>
    <div class="title">
      <input placeholder='Email...'></input>
      <span>movie</span>
    </div>
    <div class="name">
    <input placeholder='Name...'></input>
      <span>Director</span>
    </div>
    <div className='description'>
       <textarea></textarea> 
       <span>Description...</span>
    </div>
    <div class="button">
    <button>Send it my way</button>
    </div>
    </form>
    <div class="seat">
      <h2>156</h2>
      <span>seat</span>
    </div>
    <div class="time">
      <h2>{time}</h2>
      <span>time</span>
    </div>
  </div>


  <div class="card cardRight">
    <img src={logo} alt="logo"></img>
    <div class="number">
      <h3>156</h3>
      <span>seat</span>
    </div>
    <div class="barcode"></div>
  </div>
  </div>


        </section>
    );
}

export default Contact;
