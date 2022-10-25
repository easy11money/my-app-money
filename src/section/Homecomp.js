import React from "react";
import {Link} from "react-router-dom";
import {tournamentData} from "../map/Homemap";
function Homerender(){
    return(
     <>
     <div className="flexs">  
            {tournamentData.map((item,index) =>(
            <Link onClick={item.alert} className="change" to= {`${item.link}`}>
          
            <div key={index} className="card-one">
                <div  className="one-top">
                <div>
                <i className="bi-calendar-check-fill" style={{color:"white",paddingBottom:"5px"}}/>
                <span className="date">{item.date}</span>
                 </div>   
                    <div className="alarm">
                        <i className="bi-alarm-fill" />
                        <p className="time">{item.time}</p>
                    </div>
                </div>
                <div className="starting">
                <p className="center-cont">{item.name}</p>
                <li className="red">{item.upcome}</li>                
              
                </div>
                <div className="bot-style">
                <div className="one-bottom">
                    <div className="left">
                        <button className="mega">MEGA</button>
                        <p className="price">{item.price}</p>
                    </div>
                    <div className="icons-mark">                   
                        <i class="bi-check-circle-fill" style={{color:"green"}} role="img" aria-label="GitHub"></i>

                    <p className="grand">Graduated</p>
                    </div>
                </div>
                </div>
            </div>
            </Link>
            ))}
        </div>
     </>
    )
}

export default Homerender;