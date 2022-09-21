import React,{useState,useEffect} from "react"
import "../styles/winprice.css";
import Alert from "@mui/material/Alert";
import {withdraw} from "../section/Cre"

function Withdraw({deposit}){
  const[map,setMap] = useState([])
  const[amount,setAmount] = useState({
    name:"",
    rank:"",
    number:""
  })
  console.log(map.item)

  function handleWithdraw(e){
    const{name,value} = e.target
    setAmount({
      ...amount,
      [name] : value

    })
  }
  
  function hanldesubmit(e){
    e.preventDefault();

    withdraw.collection('withdrawdata')
    
    .add({
           withdrawdata:amount,
           // number:number  
           
     })
    .then(()=>{
     alert("winiing amount will be created 24 hours")
    })
    .catch((error) =>{
     alert(error.message)
    });
    setAmount({name:"",rank:"",number:""})

   }

   useEffect(() =>{
    withdraw.collection("withdrawdata").onSnapshot(shot =>{
        setMap(shot.docs.map(doc => ({
          id:doc.id, withdrawdata:doc.data().withdrawdata
        })))
    })
 },[])



  
     return(
      <div>
      <div className="deposit">
      <div className="withdrawform">
       {/* <h4>Withdraw</h4> */}
       <Alert className="veri">Provide correct details</Alert>
       
       <Alert className="verify">Enter Googlepay, Phonepe,Paytm Number</Alert>
       <form onSubmit={hanldesubmit}>
       <input className="rank-data"
              type="text" 
              placeholder="name"
              name="name"
              value={amount.name}
              onChange={handleWithdraw}

                  /><br/>
       <input className="rank-data" 
              type="number" 
              placeholder="Enter your Rank"
              name="rank"
              value={amount.rank}
              onChange={handleWithdraw}
              /><br/>
       <input className="rank-data" 
              type="number" 
              placeholder="withdraw number"
              name="number"
              value={amount.number}
              onChange={handleWithdraw}
              />
       <button  className="with-btn">withdarw</button>
       </form>
       </div>


      </div>
       <div onClick={()=> deposit(false)} className="overlay"></div>
       {map.map(item => (
         <div>
           <p>{item.list}</p>
          </div>
       ))}
     </div>
    )
}

export default Withdraw;