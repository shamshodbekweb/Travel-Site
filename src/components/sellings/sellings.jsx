import React from "react";
import "../sellings/style.css"
import image from "../../assets/Image (2).png"
import group from "../../assets/Group 7.png"
import group1 from "../../assets/Group 12.png"
import group2 from "../../assets/Group 11.png"

function Sellings() {
    return (
        <div className="Sellings">
            <div className="container">
                <div className="allSellings">
                    <div className="text">
                        <h1>Book your next trip
                            in 3 easy steps</h1>
                        <div className="groups">
                            <img src={group} alt="" />
                            <div className="imfo">
                                <i>Choose Destination</i>
                                <p>Choose Destination Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Urna, tortor tempus. </p>
                            </div>
                        </div>
                        <div className="groups">
                            <img src={group1} alt="" />
                            <div className="imfo">
                                <i>Choose Destination</i>
                                <p>Choose Destination Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Urna, tortor tempus. </p>
                            </div>
                        </div>
                        <div className="groups">
                            <img src={group2} alt="" />
                            <div className="imfo">
                                <i>Choose Destination</i>
                                <p>Choose Destination Lorem ipsum dolor sit amet, consectetur  adipiscing elit. Urna, tortor tempus. </p>
                            </div>
                        </div>
                    </div>
                    <div className="img">
                        <img src={image} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sellings;
