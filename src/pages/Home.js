import  React,{useState} from "react";
import "../styles/home.css";
import {Carousel}  from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Menu from "../section/Menu";
import Homerend from "../section/Homecomp";
import Section from "../section/Header";

import {Link} from "react-router-dom"
function Footer(){
    const[menu, setMenu] = useState(false)
 return(
    <div className={`flex ${menu && "show-create-menu"}`}>
           <div className="top-component">
         <div className="top-navbar">
           
            <div className="me">
              <i style={{color:"white",fontSize:"30px"}} className="menu" class="bi-list"  onClick={() => setMenu(true)} alt="menu"/>
              <div className="trophy">
            
              <h3 className="top-title">easy11money</h3>
              {/* <i className="bi-trophy-fill" style={{color:"white",fontSize:"20px",paddingBottom:"5px"}}/> */}


              </div>
              <a className="under" href="https://t.me/+c-zQHDKvY283ZGFl">
              <div className="jointeam">
              <i style={{color:"#2f4e93",fontSize:"13px"}} class="bi-telegram" />
              <button className="team">Join</button>
              </div>
              </a>
             </div>
            
            </div>
            </div>
           
            <div className="second-color">
            <Carousel>  
                    <div className="slide-one">
                     
                    </div>
                    <div className="slide-two">
                 
                    </div>
                    <div className="slide-three">
                   
                    </div>
            </Carousel>   
            </div>
           
          
           
         <div className="top">
          <p className="home-title">Weekly Tournament</p>
            <Homerend/>
       </div>
       <Menu setMenu =  {setMenu}/>
       <Section/>

     </div>
    );
}
export default Footer;