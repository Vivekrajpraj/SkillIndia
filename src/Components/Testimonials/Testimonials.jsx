import React, { useRef } from 'react'
import './Testimonials.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import user_1 from '../../assets/Saurabh.jpeg'
import user_2 from '../../assets/Yash.jpeg'
import user_3 from '../../assets/User3.jpg'
import user_4 from '../../assets/user-4.jpg'

const Testimonials = () => {

    const slider = useRef();
    let tx = 0;

const slideForward = ()=>{
    if(tx > -50){
        tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}
const slideBackward = ()=>{
    if(tx < 0){
        tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
}

  return (
    <div className='testimonials'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_1} alt="" />
                        <div>
                            <h3>Saurabh</h3>
                            <span>Shamli, India</span>
                        </div>
                    </div>
                    <p>Choosing to pursue my degree at Edusity was one of the best decisions I've ever made. The supportive community, state-of-the-art facilities, and commitment to academic excellence have truly exceeded my expectations.</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_2} alt="" />
                        <div>
                            <h3>Yash Bhardwaj</h3>
                            <span>Gaziyabad, India</span>
                        </div>
                    </div>
                    <p>Skill India College offers top-notch education with practical skills, supportive faculty, modern facilities, and strong industry ties. It prepares students for careers through placements</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_3} alt="" />
                        <div>
                            <h3>Shalini Sharma</h3>
                            <span>Jaipur, India</span>
                        </div>
                    </div>
                    <p>"SKILL INDIA College has equipped me with practical skills and industry knowledge. The supportive environment and excellent facilities have prepared me for a promising career."</p>
                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="user-info">
                        <img src={user_4} alt="" />
                        <div>
                            <h3>Vansh Kumar</h3>
                            <span>Jammu & Kashmir ,India</span>
                        </div>
                    </div>
                    <p>"SKILL INDIA College offers exceptional education with practical learning opportunities and supportive faculty. Its modern facilities and industry connections "</p>
                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Testimonials
