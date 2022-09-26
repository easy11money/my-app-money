import React from "react"
import "../styles/terms.css"
import Alert from "@mui/material/Alert"
import Step from "../imges/11.png"
import Step2 from "../imges/tor.png"
import Step3 from "../imges/waitlogo.png"
import Step4 from "../imges/winin.png"
import Step5 from "../imges/search.png"
import Video from "../imges/vid.mp4"

function Play() {
   return (
      <div className="howplay">
         <div className="plystart draw">
            <p>It's easy to start playing</p>
            <p className="colr">on easy11money</p>
         </div>
         <Alert>Play Fantasy on Easy 11 Money and win big</Alert>
         <div className="how-play">
            <div className="gauid">
               <div className="step">
                  <div>
                     <p className="onestep">1</p>
                     <h4 className="slec">Select Match</h4>
                  </div>
                  <img className="setpimg" src={Step} alt="logo" />
               </div>
               <p className="choo">Choose an upcomeing match that you want to play</p>
            </div>
            <div className="bord-style"></div>
            <div className="gauid">
               <div className="step">
                  <div>
                     <p className="onestep">2</p>
                     <h4 className="slec">Join Contest</h4>
                  </div>
                  <img className="setpimg" src={Step2} alt="logo" />
               </div>
               <p className="choo">Simply join the contest and Complete</p>
            </div>
            <div className="bord-style"></div>

            <div className="gauid">
               <div className="step">
                  <div>
                     <p className="onestep">3</p>
                     <h4 className="slec">Leaderboard</h4>
                  </div>
                  <img className="setpimg" src={Step3} alt="logo" />
               </div>
               <p className="choo">
                  <ul>
                     <p>1.Check Leaderboard</p>
                     <p>2.Contest is full after userdetail is Show.</p>
                  </ul>
               </p>
            </div>
            <div className="bord-style"></div>

            <div className="gauid">
               <div className="step">
                  <div>
                     <p className="onestep">4</p>
                     <h4 className="slec">Leaderboard Users</h4>
                  </div>
                  <img className="setpimg" src={Step5} alt="logo" />
               </div>
               <p className="choo">
                  <ul>
                     <p>1.Check player Leaderboard</p>
                     <p>2.Above search your name</p>
                  </ul>
               </p>
            </div>
            <div className="bord-style"></div>

            <div className="gauid">
               <div className="step">
                  <div>
                     <p className="onestep">5</p>
                     <h4 className="slec">Winnnings</h4>
                  </div>
                  <img className="setpimg" src={Step4} alt="logo" />
               </div>
               <p className="choo">Check all Winnnings detail here and join contest</p>
            </div>
            <h3 className="video-play">Watch Video<br /> How to play and learn</h3>
            <video className="video" width="100%" height="300vh" controls>
               <source src={Video} type="video/mp4" />
            </video>
         </div>
      </div>


   )
}

export default Play;