import React from "react";
import "../sponsors/style.css"
import group from "../../assets/image 27.png"
import group1 from "../../assets/image 28.png"
import group2 from "../../assets/image 29.png"
import group3 from "../../assets/image 30.png"
import group4 from "../../assets/image 31.png"

function Sponsors() {
    return (
        <div className="Sponsors">
            <div className="container">
             <div className="all_sponsers">
                <div className="sponsership">
                    <img src={group} alt="" />
                </div>
                <div className="sponsership">
                <img src={group1} alt="" />
                </div>
                <div className="sponsership">
                <img src={group2} alt="" />
                </div>
                <div className="sponsership">
                <img src={group3} alt="" />
                </div>
                <div className="sponsership">
                <img src={group4} alt="" />
                </div>
             </div>
            </div>
        </div>
    );
}

export default Sponsors;
