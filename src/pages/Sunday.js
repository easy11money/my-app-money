import React from "react";
import "../styles/Winner.css";
import { registration, sunday } from "../map/Homemap";
import { Link } from "react-router-dom";
import Section from "../section/Header";


function Sunday() {
    return (
        <div className="sunday-match">
            <div className="contest">
                <div className="contests">
                    <Link className="back-arrow" to="/home">
                        <i style={{ fontSize: "25px" }} className="bi-arrow-left" />
                    </Link>
                    <div className="sunday-gap">
                        <p className="party">{registration[0].tourname}</p>

                    </div>

                    <div>
                        <i style={{ color: "gold" }} className="bi-trophy-fill" />
                        <span style={{ color: "gold", paddingLeft: "10px" }}>{registration[0].price}</span>
                    </div>

                </div>

                <p className="start">registration open {registration[0]?.starttime}</p>
            </div>
            <p className="only">Only one contest make win 99% chance</p>
            <p className="sun-contest">Contest</p>
            {sunday.map((item, index) => (

                <div className="contest-des">
                
                    <Link to="/leader" key={index} className="contest-card">
                        <div className="contest-top">


                            <p>Enter Pay</p>
                            <p> Total Pool</p>

                        </div>
                        <div className="contest-prize">
                            <p className="pay">{item.pay}</p>
                            <li className="live">{item.live}</li>

                            <p className="pool">{item.totalprice}</p>

                        </div>
                        <progress className="player-progress" value={item.value} max={100}></progress>
                        <div className="players">
                            <p className="total-player">{item.spots}</p>
                            <p className="spots">{item.left}</p>

                        </div>
                        <div className="contest-bottom">

                            <div className="mark">
                                <i class="bi-check-circle-fill" style={{ color: "green" }} role="img" aria-label="GitHub"></i>

                                <p>Garanteed</p>
                            </div>
                            <div className="first-price">
                                <p className="sunprice">(1<sub>st</sub>) {item.firstprice}</p>
                                {/* <div className="percen-flex">
                                <i className="bi-trophy-fill" />
                                <p className="win-percen">{item.percentage}</p>
                                </div> */}
                            </div>
                        </div>
                    </Link>

                </div>
            ))}
            <Section />

        </div>

    )
}

export default Sunday;