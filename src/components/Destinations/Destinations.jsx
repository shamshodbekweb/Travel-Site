import React from 'react'
import css from '../Destinations/style.css'
import rec1 from '../../assets/Destination.png'
import rec2 from '../../assets/Destination1.png'
import rec3 from '../../assets/Destination2.png'


function Destinations() {
  return (
    <div>
        <div className="text">
            <h3 className='top'>✵Top Selling✵</h3>
            <h1>Top Destinations</h1>
        </div>
        <div className="des_list">
            <div className="des_iteam">
                <a href="https://uz.wikipedia.org/wiki/Qadimgi_Rim"><img src={rec1} alt="" /></a>
            </div>
            <div className="des_iteam">
                <a href="https://ru.wikipedia.org/wiki/%D0%9B%D0%BE%D0%BD%D0%B4%D0%BE%D0%BD"><img src={rec2} alt="" /> </a>
            </div>
            <div className="des_iteam">
                <a href="https://ru.wikipedia.org/wiki/%D0%A1%D1%82%D0%B0%D0%BC%D0%B1%D1%83%D0%BB"><img src={rec3} alt="" /> </a>
            </div>
        </div>
    </div>
  )
}

export default Destinations