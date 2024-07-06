import React from "react";
import "../header/style.css"
import logo from "../../assets/Logo.png"

function Header() {
  return (
    <div className="Header">
        <div className="container">
            <div className="logo">
                <img src={logo} alt="" />
            </div>
            <div className="links">
                <ul>
                    <a className="link">Desitnations</a>
                    <a className="link">Hotels</a>
                    <a className="link">Flights</a>
                    <a className="link">Bookings</a>
                    <a className="link">Login </a>
                    <button className="sign-up">Sign-up</button>
                    <select className="select" name="" id="">
                        <option className="option" value="">En</option>
                        <option className="option" value="">Ru</option>
                    </select>
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Header;
