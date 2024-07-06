import React from "react";
import "../subscription/style.css"


function Subscription() {
    return (
        <div className="Subscription">
            <div className="Container">
             <div className="all_data">
                <center>
                    <h1 className="Title">Subscribe to get information, latest news and other
                    interesting offers about Jadoo</h1>
                </center><br />
                <div className="input">
                    <input type="email" placeholder="Your email"/>
                    <button>Subscribe</button>
                </div>
             </div>
            </div>
        </div>
    );
}

export default Subscription;
