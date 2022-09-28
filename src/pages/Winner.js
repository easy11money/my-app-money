import React from "react";
import "../styles/windetail.css";
import Section from "../section/Header";
import { tableone, tabletwo } from "../map/Winuser";
import { Carousel } from "react-responsive-carousel";



function Winner() {
    return (
        <div>
            <div className="win-title">
                <h4>Winners</h4>
            </div>
            <p className="con-win">Contest Winners</p>
            <p className="recent">Recent Matches</p>
            <div className="match-part">
                <div className="match-one">
                    <p className="match-title">Sunday Party Winners</p>
                    {tableone.length !== 0 ? (
                        <Carousel>

                            <div className="winer-flex">
                                {tableone.map((item) => (
                                    <div className="one-win">
                                        <p>Rank#{item.rank}</p>
                                        <p>{item.name}</p>
                                        <i style={{ fontSize: "60px", paddingTop: "20px" }} className="bi-person-circle" />
                                        <p className="monee">{item.won}</p>
                                    </div>
                                ))}

                            </div>
                            <div className="winer-flex">
                                {tabletwo.map((item) => (
                                    <div className="one-win">
                                        <p>Rank#{item.rank}</p>
                                        <p>{item.name}</p>
                                        <i style={{ fontSize: "60px", paddingTop: "20px" }} className="bi-person-circle" />
                                        <p className="monee">{item.won}</p>
                                    </div>
                                ))}
                            </div>
                        </Carousel>
                    ) : (<div className="before">Match not yet Start it.  (:!</div>)}
                </div>
                
            </div>
            <div className="match-part">
                <div className="match-one">
                    <p className="match-title">Sunday Party Winners</p>
                    {tableone.length !== 0 ? (
                        <Carousel>

                            <div className="winer-flex">
                                {tableone.map((item) => (
                                    <div className="one-win">
                                        <p>Rank#{item.rank}</p>
                                        <p>{item.name}</p>
                                        <i style={{ fontSize: "60px", paddingTop: "20px" }} className="bi-person-circle" />
                                        <p className="monee">{item.won}</p>
                                    </div>
                                ))}

                            </div>
                            <div className="winer-flex">
                                {tabletwo.map((item) => (
                                    <div className="one-win">
                                        <p>Rank#{item.rank}</p>
                                        <p>{item.name}</p>
                                        <i style={{ fontSize: "60px", paddingTop: "20px" }} className="bi-person-circle" />
                                        <p className="monee">{item.won}</p>
                                    </div>
                                ))}
                            </div>
                        </Carousel>
                    ) : (<div className="before">Match not yet Start it.  (:!</div>)}
                </div>
                
            </div>
            <Section />
        </div>
    )
}

export default Winner;