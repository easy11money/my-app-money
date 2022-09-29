import React, { useState } from "react";
import "../styles/home.css";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from "../section/Menu";
import Homerend from "../section/Homecomp";
import Section from "../section/Header";
import Logo from "../imges/lgo.jpg"
function Footer() {
  const [menu, setMenu] = useState(false)
  return (
    <div className={`flex ${menu && "show-create-menu"}`}>
      <div className="top-component">
        <div className="top-navbar">

          <div className="me">
            <i style={{ color: "white", fontSize: "30px" }} className="menu" class="bi-list" onClick={() => setMenu(true)} alt="menu" />
            <div className="trophy">
              <img style={{width:"35px",height:"35px"}} src={Logo} alt="logo"/>
              <h3 className="top-title">easy11money</h3>
            </div>
            <a className="under" href="https://t.me/+c-zQHDKvY283ZGFl">
              <div className="jointeam">
                <i style={{ color: "#2266ff", fontSize: "13px" }} class="bi-telegram" />
                <button className="team">Join</button>
              </div>
            </a>
          </div>

        </div>
      </div>

      <div className="second-color">
        <Carousel>
          <div className="slide-one">
          <h1 className="slide-css">come get more spcial money</h1>
            <h4 className="sha">Grant Lanuch today!</h4><br/>
          </div>
          <div className="slide-two">
          <h1 className="slide-css">come get more spcial money</h1>
            <h4 className="sha">SundayParty</h4><br/>
          </div>
          <div className="slide-three">
          <h1 className="slide-css">Small Party
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