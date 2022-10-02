import React from "react";
import "../styles/windetail.css";
import Section from "../section/Header";
import { tableone, tabletwo } from "../map/Winuser";
import { Carousel } from "react-responsive-carousel";
import Logo from "../imges/lgo.png";

function Winner() {
    return (
        <div>
            <div className="win-title">
            <div className="flex-wallet">
            <img style={{width:"35px",height:"35px"}} src={Logo} alt="logo"/>
            <h4>Winners</h4>
            </div>
            <div className='help-flex'>
                    <i style={{color:"white"}} className='bi-youtube'/>
                    <p>Join</p>
                    </div>
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
                                        <i style={{ fontSize: "60px", paddingTop: "20px",color:"gainsboro" }} className="bi-person-circle" />
                                        <p className="win-name">Rank #{item.rank}</p>
                                        <p className="win-name">{item.name}</p>
                                        <p className="monee">{item.won}</p>                                    </div>
                                ))}

                            </div>
                            <div className="winer-flex">
                                {tabletwo.map((item) => (
                                    <div className="one-win">
                                        <i style={{ fontSize: "60px", paddingTop: "20px",color:"gainsboro" }} className="bi-person-circle" />
                                        <p className="win-name">Rank #{item.rank}</p>
                                        <p className="win-name">{item.name}</p>
                                        <p className="monee">{item.won}</p>                                    </div>
                                ))}

                            </div>
                        </Carousel>
                    ) : (<div className="before">Match not yet Start it.  (:!</div>)}
                </div>
                <div className="match-one">
                    <p className="match-title">Sunday Party Winners</p>
                    {tableone.length !== 0 ? (
                        <Carousel>

                            <div className="winer-flex">
                                {tableone.map((item) => (
                                    <div className="one-win">
                                        <i style={{ fontSize: "60px", paddingTop: "20px",color:"gainsboro" }} className="bi-person-circle" />
                                        <p className="win-name">Rank #{item.rank}</p>
                                        <p className="win-name">{item.name}</p>
                                        <p className="monee">{item.won}</p>                                    </div>
                                ))}

                            </div>
                            <div className="winer-flex">
                                {tabletwo.map((item) => (
                                    <div className="one-win">
                                        <i style={{ fontSize: "60px", paddingTop: "20px",color:"gainsboro" }} className="bi-person-circle" />
                                        <p className="win-name">Rank #{item.rank}</p>
                                        <p className="win-name">{item.name}</p>
                                        <p className="monee">{item.won}</p>                                    </div>
                                ))}

                            </div>
                        </Carousel>
                    ) : (<div className="before">Match not yet Start it (:!</div>)}
                </div>
                
                
            </div>
           
          
            <Section />
        </div>
    )
}

export default Winner;