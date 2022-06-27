import React from 'react';
import Footer from '../Components/Footer';
import AboutMe from '../Components/AboutMe';
import Contact from '../Components/Contact';
import LandingPage from '../Components/LandingPage';
import MySkills from '../Components/MySkills';
import MyWork from '../Components/MyWork';
import Nav from '../Components/Nav';
import Values from '../Components/Values';

const HomePage = () => {
    return (
        <>
    <Nav/>
    <LandingPage/>
    <AboutMe/>
    <MySkills />
    <MyWork />
    <Values />
    <Contact />
    <Footer />
        </>
    );
}

export default HomePage;
