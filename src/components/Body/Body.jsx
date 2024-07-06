import React from 'react'
import css from './style.css'
import Group48 from '../../assets/Group 48.png'
import Group49 from '../../assets/Group 49.png'
import Group50 from '../../assets/Group 50.png'
import Group51 from '../../assets/Group 51.png'
function Body() {
  return (
    <div className='wrapper'>
      <div className="text">
      <h3 className='cate'>✵CATEGORY✵</h3>
        <h1>We Offer Best Services</h1>
      </div>
        <div className="body_list">
          <div className="body_iteam">
            <img src={Group48} alt="" />
            <h3>Calculated Weather</h3>
            <span>Built Wicket longer <br /> admire do barton <br />vanity itself do in it.</span>
          </div>
          <div className="body_iteam">
          <img src={Group49} alt="" />
          <h3>Best Flights</h3>
          <span>Engrossed listening. <br /> Park gate sell they <br /> west hard for the.</span>
          </div>
          <div className="body_iteam">
          <img src={Group50} alt="" />
          <h3>Local Events</h3>
          <span>Barton vanity itself do <br /> in it. Preferd to men it <br /> engrossed listening.</span>
          </div>
          <div className="body_iteam">
          <img src={Group51} alt="" />
          <h3>Customization</h3>
          <span>We deliver outsourced <br /> aviation services for <br /> military customers</span>
          </div>
        </div>
    </div>
  )
}

export default Body