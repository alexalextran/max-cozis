import React from 'react';
import logo from '../Assets/punpun-transparent.png'

const Contact = () => {
    return (
        <section className='contact'>


  <div class="card cardLeft">
    <h1>Startup <span>Cinema</span></h1>
    <div class="title">
      <input></input>
      <span>movie</span>
    </div>
    <div class="name">
      <h2>Vladimir Kudinov</h2>
      <span>name</span>
    </div>
    <div class="seat">
      <h2>156</h2>
      <span>seat</span>
    </div>
    <div class="time">
      <h2>12:00</h2>
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


        </section>
    );
}

export default Contact;
