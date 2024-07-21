import React from 'react'
import './Campus.css'
import gallery_1 from '../../assets/College.jpg'
import gallery_2 from '../../assets/Library.jpg'
import gallery_3 from '../../assets/Ground.jpg'
import gallery_4 from '../../assets/Classroom.jpg'
import white_arrow from '../../assets/white-arrow.png'

const Campus = () => {
  return (
    <div className='campus'>
      <div className="gallery">
        <img src={gallery_1} alt="" />
        <img src={gallery_2} alt="" />
        <img src={gallery_3} alt="" />
        <img src={gallery_4} alt="" />
      </div>
      <a href="https://www.shutterstock.com/search/skill-development-india" target="_blank" rel="noopener noreferrer">
      <button className='btn dark-btn'>See more here <img src={white_arrow} alt="" /></button>
      </a>
    </div>
  )
}

export default Campus
