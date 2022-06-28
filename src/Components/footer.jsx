
import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  


    return (
        <section className='footer'>
             <Link to="/dashboard" className="button">Dashboard</Link>
             <ul>
                <li>
                    LinkedIn
                </li>
             </ul>
             <p>Designed And Developed By <a href="https://alextranportfolio.com/">Alex Tran</a></p>
        </section>
    );
}

export default Footer;
