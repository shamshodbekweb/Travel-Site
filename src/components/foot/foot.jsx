import React from "react";
import "../foot/style.css"
import group from "../../assets/Facebook Icon (2).png"
import group1 from "../../assets/google-play 1 (1).png"
import group2 from "../../assets/instagram 1.png"
import group3 from "../../assets/Vector (2).png"
import group4 from "../../assets/Group (1).png"

function Footer() {
  return (
    <div className="Footer">
        <div className="container11">
        <div className="alls">
            <div className="num1">
                <h1>Jadoo.</h1>
                <p>Book your trip in minute, get full Control for much longer.</p>
            </div>
            <div className="num2">
                <h3>Company</h3>
                <p>About</p>
                <p>Careers</p>
                <p>AboutMobile</p>
            </div>
            <div className="num3">
                <h3>Contact</h3>
                <p>Help/FAQ</p>
                <p>Press</p>
                <p>Affilates</p>
            </div>
            <div className="num4">
                <h3>More</h3>
                <p>Airlinefees</p>
                <p>Airline</p>
                <p>Low fare tips</p>
            </div>
            <div className="sponsers">
                <div className="follow_us">
                    <div className="circle">
                        <img src={group} alt="" />
                    </div>
                    <div className="circle2">
                    <img src={group2} alt="" />
                    </div>
                    <div className="circle">
                    <img src={group3} alt="" />
                    </div>
                </div>
                {/* <div className="title"> */}
                    <h2>Discover our app</h2>
                {/* </div> */}
                <div className="installs">
                    <div className="install">
                    <img src={group1} alt="" />
                        <p>GET IT ON BR <br /> GOOGLE PLAY</p>
                    </div>
                    <div className="install">
                    <img src={group4} alt="" />
                        <p>Avalible on the <br /> Apple Store</p>
                    </div>
                </div>
            </div><br /><br />
            </div>
                <center className="center">
                    <h3>All rights reserved@jadoo.co</h3>
                </center>
        </div>
    </div>
  );
}

export default Footer;
