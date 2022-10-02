import React from "react";
import "../styles/withdraw.css"
import Review from "../imges/wallet.png"
import Btn from "../imges/won.png"
import Draw from "../imges/withdraw.png"
function Amount() {
   return (
      <div>
        <div className="plystart draw">
           <h4>How to Withdraw</h4>
           <div className='help-flex'>
                    <i style={{color:"white"}} className='bi-youtube'/>
                    <p>Join</p>
                   
            </div>
         </div>
         <div className="how-play">
            <div className="gauid">
               <div className="step">
                  <div>
                     <p className="onestep">1</p>
                     <h4 className="slec">Review Process</h4>
                  </div>
                  <img className="setpimg" src={Btn} alt="logo" />
               </div>
               <p className="choo">Once Review process is complete.Winning amount will be added your wallet.</p>
            </div>
            <div className="bord-style"></div>

            <div className="gauid">
               <div className="step">
                  <div>
                     <p className="onestep">2</p>
                     <h4 className="slec">Check Wallet</h4>
                  </div>
                  <img className="setpimg" src={Review} alt="logo" />
               </div>
               <p className="choo">1.Search your wallet above.Once find your wallet Click withdraw button.</p>
               <p className="choo">2.Mininum Withdraw Amount ₹50.</p>

            </div>
            <div className="bord-style"></div>

            <div className="gauid">
               <div className="step">
                  <div>
                     <p className="onestep">3</p>
                     <h4 className="slec">Withdraw Form</h4>
                  </div>
                  <img className="setpimg" src={Draw} alt="logo" />
               </div>
               <p className="choo">1.Provide Correct detail this form and Submit.</p>
               <p className="choo">2.Once Submit the form withdraw Amount credit within 24hours.</p>

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