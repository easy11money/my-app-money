import React from "react";
import "../styles/Winner.css";
import{registration, sunday} from "../map/Homemap";
import {Link} from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

function Sunday(){
    return(
        <div className="sunday-match">
         <div className="contest">
            <div className="contests">
               <Link className="back-arrow" to="/home">
                <i style={{fontSize:"25px"}} className="bi-arrow-left"/>
               </Link>
               <div className="sunday-gap">
                <p className="party">{registration[0].tourname}</p>
              
                </div>
                
                <div>
                <i style={{color:"gold"}} className="bi-trophy-fill"/>
                <span style={{color:"gold",paddingLeft:"10px"}}>{registration[0].price}</span>
                </div>
                
            </div>
            
            <p className="start">registration open {registration[0]?.starttime}</p>
            </div>
            <p className="only">Only one contest make win 99% chance</p> 
            <p className="sun-contest">Contest</p>
           <div className="contest-des"> 
            {sunday.map((item,index) => (
            <Link to="/leader" key={index} className="contest-card">
                <div className="contest-top">
                    <p>Price Pool</p>
                    
                        <li className="live">{item.live}</li>
                    
                    <p>Entry</p>
                </div>
                <div className="contest-prize">
                    <p className="pool">{item.totalprice}</p>
                    {/*  <div> <a  href='https://pmny.in/gIukSmMYIZH8' >₹12 Pay</a> </div> */}
                    <form><script src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KKK5TsEqQsWAUK" async>pay</script>pay</form>
                    {/* <Link to="/home" className="pay">{item.pay}</Link> */}
                </div>
                <progress className="player-progress" value={item.value} max={100}></progress>
                <div className="players">
                    <p className="total-player">{item.spots}</p>
                    <p className="spots">{item.left}</p>
                 
                </div>
                <div className="contest-bottom">
                    <div className="first-price">
                    <p className="sunprice">{item.firstprice}</p>
                    
                    <i className="bi-trophy"/>
                    <p>{item.percentage}</p>
                    </div>
                    <div className="mark">
                    <i class="bi-check-circle-fill" style={{color:"green"}} role="img" aria-label="GitHub"></i>

                    <p>Garanteed</p>
                 </div>
                </div>
            </Link>
            ))}
            </div>

            <form><a href="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KKK5TsEqQsWAUK" async>pay</a>pay</form>
         





            <h1 src="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KKK5TsEqQsWAUK" async>pay</h1>
           
          {/* <script><a href="https://checkout.razorpay.com/v1/payment-button.js" data-payment_button_id="pl_KKK5TsEqQsWAUK" async>Pay</a></script> */}

            {/* <div> <a  href='https://pmny.in/gIukSmMYIZH8' >₹12Pay</a> </div> */}

         </div>

    )
}

export default Sunday;