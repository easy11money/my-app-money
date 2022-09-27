import React from "react";
import "../styles/header.css";
import { Link } from "react-router-dom";
import "../styles/menu.css";



function Header({ setMenu }) {
    return (

        <div className="footer">

            <div className="bottom">
                <div className="fit">
                    <Link to="/Home"><i style={{ color: "black", fontSize: "20px" }} className="bi-house-door-fill" /></Link>
                    <Link className="home" to="/Home">Home</Link>
                </div>
                <div className="fit">
                    <Link to="/winner"><i style={{ color: "black", fontSize: "20px" }} class="bi-trophy-fill" /></Link>
                    <Link className="home" to="/Form">Winner</Link>
                </div>
                <div className="fit">
                    <a href="https://t.me/+c-zQHDKvY283ZGFl"><i style={{ color: "black", fontSize: "20px" }} class="bi-chat-right-text-fill" /></a>
                    <a href="https://t.me/+c-zQHDKvY283ZGFl" className="home" >Chat</a>
                </div>
                <div className="fit">
                    <Link to="/winner"><i style={{ color:"black", fontSize: "20px" }} class="bi-youtube" /></Link>
                    <a href="https://t.me/+c-zQHDKvY283ZGFl" className="home">YouTube</a>
                </div>
                
            </div>


        </div>

    );
}
export default Header;
