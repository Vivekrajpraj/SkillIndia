import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>Empowering futures through knowledge, skill, and opportunity together</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills, and experiences needed to excel in the dynamic field of education</p>
        <a href="https://www.skillindiadigital.gov.in/home" target="_blank" rel="noopener noreferrer">
        <button className='btn'>Explore more <img src={dark_arrow} alt="" /></button>
        </a>
      </div>
    </div>
  )
}

export default Hero
