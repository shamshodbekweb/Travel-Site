import React from "react";
import "../category/stylee.css"
import groupa from "../../assets/Group 48.png"
import img from "../../assets/Group 51.png"
import image from "../../assets/Group 49.png"
import rasm from "../../assets/Group 50.png"

function Category() {
    return (
        <div className="Category">
            <div className="container">
                <div className="all">
                    <div className="title">
                        <center>
                            <p>Category</p><br />
                            <h1>We Offer Best Services</h1>
                        </center>
                    </div><br />
                    <div className="cards">
                        <div className="card">
                            <center>
                                <img className="img" src={groupa} alt="" />
                                <h1 className="h1">Calculated Weather </h1>
                                <p>Built Wicket longer admire do barton vanity itself do in it.</p>
                            </center>
                        </div>
                        <div className="card">
                            <center>
                                <img className="img" src={img} alt="" />
                                <h1 className="h1">Best Flights</h1>
                                <p>Engrossed listening. Park gate sell they west hard for the.</p>
                            </center>
                        </div>
                        <div className="card">
                            <center>
                                <img className="img" src={image} alt="" />
                                <h1 className="h1">Local Events</h1>
                                <p>Barton vanity itself do in it. Preferd to men it engrossed listening. </p>
                            </center>
                        </div>
                        <div className="card">
                            <center>
                                <img className="img" src={rasm} alt="" />
                                <h1 className="h1">Customization</h1>
                                <p>We deliver outsourced aviation services for military customers</p>
                            </center>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Category;
