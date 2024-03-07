import Navbar from '../components/Navbar.js';
import Hero from '../components/Hero.js';
import Content from '../components/Content.js';
import Cards from '../components/Cards.js';
import Footer from '../components/Footer.js';
import './homepage.css';
import React from 'react';

const Homepage = () => {
    return(
        <div className='homepage'>
            <Navbar />
            <Hero />
            <Content />
            <Cards />
            <Footer />
        </div>
    )
}

export default Homepage;