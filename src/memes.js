import { click } from "@testing-library/user-event/dist/click";
import React, { useState } from "react";
import "./allstyle.css";
import Img from "./imges/1.png";
import Imgone from "./imges/5.png";
import Imgtwo from "./imges/3.png";
import Imgthree from "./imges/4.png";


const memes = [
    {
        img : Img,
    },
    {
        img : Imgone,
    },
    {
        img : Imgtwo,
    },
    {
        img : Imgthree,
    },
    
]
const data = ["nae","age","sex"]


function Mems(){
 const[meme,setMeme] = useState("");
 const [thing,setThing] = useState(data)
 
 const stow = [3,32,2]
 console.log(stow)
 localStorage.setItem("data",stow)
 console.log(localStorage.getItem("data"))
  function click(){
        const Array = memes;
        const random = Math.floor(Math.random() * Array.length)
        setMeme( Array[random].img)
        console.log(random)
      }
  
    return(
      <div>
        <button>additem</button>
        <p>{thing}</p>
    

        <ul>
            <li>Event Listners</li>
            <li>State</li>
            <li>Conditional rendering</li>
            <li>Forms</li>
            <li>Side Effects</li>
        </ul>
      <div className="sha">
       <div className="mems">
        <div className="flexs">
         <h1>|||</h1>
         <h2>Meme Generator</h2>   
        </div>
        <div>
            <h4>React Course - Proect-3</h4>
        </div>
        </div>
        <input type="text" placeholder="put your cmd"/>
        <input type="text" placeholder="put your cmd"/>
       <br/><button onClick={click} className="btn-meme">Get new meme image</button>
      <img src={meme} alt="logo"/>
       
       </div>
      </div>
    )
}

export default Mems;