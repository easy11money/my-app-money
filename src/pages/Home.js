import React, { useState } from "react";
import "../styles/home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from "../section/Menu";
import Homerend from "../section/Homecomp";
import Section from "../section/Header";

function Footer() {
  const [menu, setMenu] = useState(false)
  return (
    <div className={`flex ${menu && "show-create-menu"}`}>
      <div className="top-component">
        <div className="top-navbar">

          <div className="me">
            <i style={{ color: "white", fontSize: "30px" }} className="menu" class="bi-list" onClick={() => setMenu(true)} alt="menu" />
            <div className="trophy">

              <h3 className="top-title">easy11money</h3>
            </div>
            <a className="under" href="https://t.me/+c-zQHDKvY283ZGFl">
              <div className="jointeam">
                <i style={{ color: "#2f4e93", fontSize: "13px" }} class="bi-telegram" />
                <button className="team">Join</button>
              </div>
            </a>
          </div>

        </div>
      </div>

      <div className="second-color">
        <Carousel>
          <div className="slide-one">
            <h1 className="slide-css">win big party
            <i style={{color:"white",fontSize:"20px"}} className="bi-lightning-charge"/>
            <i style={{color:"orange",fontSize:"20px"}} className="bi-fire"/>

            </h1>
            
            <h4 className="sha">___Sunday Party----</h4><br/>
          </div>
          <div className="slide-two">
          <h1 className="slide-css">big party
            <i style={{color:"white",fontSize:"20px"}} className="bi-lightning-charge"/>

            </h1>
            <h4 className="sha-one">----Monday Special___</h4><br/>
          </div>
          <div className="slide-three">
          <h1 className="slide-css">Small Party
            <i style={{color:"white",fontSize:"20px"}} className="bi-lightning-charge"/>

            </h1>
            <h4 className="sha-two">Friday freedom</h4><br/>
          </div>
        </Carousel>
      </div>
      <div className="top">
        <p className="home-title">Weekly Tournament</p>
        <Homerend />
      </div>
      <Menu setMenu={setMenu} />
      <Section />

    </div>
  );
}
export default Footer;