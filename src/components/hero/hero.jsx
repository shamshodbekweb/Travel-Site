import React from "react";
import "../hero/style.css"
import Header1 from "../header/header";
import image from "../../assets/Image.png"
import PlayDemo from "../../assets/Play button.png"

function Hero() {
    return (
        <div className="Hero">
            <div className="header">
                <Header1 />
            </div>
            <div className="container">
                <div className="info">
                    <p className="p1">Best Destinations around the world</p>
                    <h1 className="h11">Travel, enjoy and live a new and full life</h1><br />
                    <p className="p2">Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.</p><br />
                    <div className="btns">
                        <button className="btn">Find out more</button>
                        <img className="btn2" src={PlayDemo} alt=" Play Demo" /> 
                    </div>
                </div>
                <div className="image">
                    <img className="img_girl" src={image} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Hero;
