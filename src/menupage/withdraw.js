import React from "react";
import "../styles/withdraw.css"
import Review from "../imges/withdraw.png"
import Btn from "../imges/withpng.png"
function Amount() {
   return (
      <div>
         <h1 className="amount-title draw">How to withdraw</h1>
         <div className="how-play">
            <div className="gauid">
               <div className="step">
                  <div>
                     <p className="onestep">1</p>
                     <h4 className="slec">Review Process</h4>
                  </div>
                  <img className="setpimg" src={Btn} alt="logo" />
               </div>
               <p className="choo">Once Review process is completed.withdraw button are show who can win price click this button.</p>
            </div>
            <div className="bord-style"></div>

            <div className="gauid">
               <div className="step">
                  <div>
                     <p className="onestep">2</p>
                     <h4 className="slec">Withdraw Form</h4>
                  </div>
                  <img className="setpimg" src={Review} alt="logo" />
               </div>
               <p className="choo">1.Click withdraw button and Show the upthe withdraw from.Provide Correct detail this form and Submit.</p>
               <p className="choo">2.Once Submit form amount will be credit 24 hours after</p>

            </div>
         </div>
         <h1 className="amount-title draw">How to add cash</h1>
         <div className="how-play">
            <div className="gauid">
               <div className="step">
                  <div>
                     <p className="onestep">1</p>
                     <h4 className="slec">Review Process</h4>
                  </div>
                  <img className="setpimg" src={Btn} alt="logo" />
               </div>
               <p className="choo">Once Review process is completed.withdraw button are show who can win price click this button.</p>
            </div>
            <div className="bord-style"></div>

            <div className="gauid">
               <div className="step">
                  <div>
                     <p className="onestep">2</p>
                     <h4 className="slec">Withdraw Form</h4>
                  </div>
                  <img className="setpimg" src={Review} alt="logo" />
               </div>
               <p className="choo">1.Click withdraw button and Show the upthe withdraw from.Provide Correct detail this form and Submit.</p>
               <p className="choo">2.Once Submit form amount will be credit 24 hours after</p>

            </div>
         </div>
      </div>
   )
}

export default Amount;