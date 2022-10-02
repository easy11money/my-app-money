import React, { useState } from "react";
import "../styles/home.css";
import {Link} from "react-router-dom"
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from "../section/Menu";
import Homerend from "../section/Homecomp";
import Section from "../section/Header";
import Logo from "../imges/lgo.png"

function Footer() {
  const [menu, setMenu] = useState(false)
  return (
    <div className={`flex ${menu && "show-create-menu"}`}>
      <div className="top-component">
        <div className="top-navbar">

          <div className="me">
            <i style={{ color: "white", fontSize: "19px" }} className="menu" class="bi-list" onClick={() => setMenu(true)} alt="menu" />
            <div className="trophy">
              <img style={{width:"35px",height:"35px"}} src={Logo} alt="logo"/>
              <h3 className="top-title">easy11money</h3>
            </div>
            <Link to="/wallet" className="under">
              {/* <div className="jointeam"> */}
                <i style={{ color: "white", fontSize: "19px" }} class="bi-wallet-fill" />
                {/* <button className="team">Wallet</button> */}
              {/* </div> */}
            </Link>
          </div>

        </div>
      </div>

      <div className="second-color">
        <Carousel>
          <div className="slide-one">
          {/* <h1 className="slide-css">come get more spcial money</h1> */}
            <h4 className="sha">Grant Lauch today!</h4><br/>
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