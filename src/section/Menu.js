import React from "react";
import "../styles/menu.css";
import {useNavigate,Link} from "react-router-dom"



function Menu({setMenu}){
  const history = useNavigate()
  const [out,setLogout] = React.useState(false)
 function handleLogout(){
 
    if(localStorage.removeItem("Auth"))
    setLogout(true)
 }

 React.useEffect(() =>{
  
  if(!localStorage.getItem("Auth")) history("/game-develope-app")

}, [out]);


return(
      <>
      
        <div className="create-ad">
          <div className="menu-top">
            <div className="divflex">
            <p className="menu-title">easy11money</p>
            <i  style={{color:"white",fontSize:"29px"}} className="bi-moon-stars-fill"></i>
            </div>
            
           </div>
           <div className="menu-link">
            <a className="under" href="https://t.me/+aukuguhEQzY3ZmFl">
            <div className="offical">
              <i style={{fontSize:"20px"}} className="bi-people"/>
              <p>Offical Group</p>
            </div>
            <Link to="/amount" className="offical">
              <i style={{fontSize:"20px"}} className="bi-coin"/>
              <p>Withdraw amount</p>
            </Link>
            </a>
            <Link to="/play" className="offical">
              <i style={{fontSize:"20px"}} className="bi-controller"/>
              <p>How to Play</p>
            </Link>
            <a className="under" href="https://t.me/+c-zQHDKvY283ZGFl">
            <div className="offical">
              <i style={{fontSize:"20px"}} className="bi-telegram"/>
              <p>Join Telegram</p>
            </div>
            </a>
            <Link to="/terms" className="offical">
              <i style={{fontSize:"20px"}} className="bi-link"/>
              <p>Terms &amp; Conditions</p>
            </Link>
            <a className="under" href="https://t.me/+xQ55jGBig-ljZjc9">
            <div className="offical">
              <i style={{fontSize:"20px"}} className="bi-telephone"/>
              <p>Help &amp; Contact Us</p>
            </div>
            </a>
            <div className="offical">
              <i style={{fontSize:"20px"}} className="bi-share"/>
              <p>Invite Friends</p>
            </div>
            <div onClick={handleLogout} className="offical">
              <i style={{fontSize:"20px"}} className="bi-box-arrow-left"/>
              <p>Logout</p>
            </div>
            
            <a className="under" href="https://t.me/+c-zQHDKvY283ZGFl">
            <button className="teams">Join Our Team</button><br/>
            </a>
           
           </div>
           
           
        </div>
        <div className="ad-overlay" onClick={() =>setMenu(false)}></div>
        

      </>  
  )
}

export default Menu;