import React from 'react'
import css from "../Book/style.css"
import img1 from '../../assets/Group 7.png'
import img2 from '../../assets/Group 11.png'
import img3 from '../../assets/Group 12.png'
import img4 from '../../assets/Group 5.png'
function Book() {
  return (
    <div className='book_wrapper'>
        <div className="right">
        <h3 className='easy'>✵Easy and Fast✵</h3>
        <h1>Book your next trip <br />in 3 easy steps</h1>
        <ul className="right_list">
            <li className="right_iteam"><img src={img1} alt="" />
              <h3>Choose Destination</h3>
              <span>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. </span>
            </li>
            <li className="right_iteam"><img src={img2} alt="" />
              <h3>Make Payment</h3>
              <span>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. </span>
            </li>
            <li className="right_iteam"><img src={img3} alt="" />
              <h3>Reach Airport on✵ Selected Date</h3>
              <span>Lorem ipsum dolor sit amet, consectetur 
adipiscing elit. Urna, tortor tempus. </span>
            </li>
        </ul>
        </div>
        <div className="left">
          <img src={img4} alt="" />
        </div>
    </div>
  )
}

export default Book