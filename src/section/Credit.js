import React, { useState, useEffect } from "react"
import "../styles/winprice.css";
import Alert from "@mui/material/Alert";
import { withdraw } from "../section/Cre"

function Withdraw({ deposit }) {
  const [firedata, setFiredata] = useState([])
  const [amount, setAmount] = useState({
    name: "",
    number: "",
    price: ""
  })
console.log(firedata.withdrawdata)
  function handleWithdraw(e) {
    const { name, value } = e.target
    setAmount({
      ...amount,
      [name]: value

    })
  }

  function hanldesubmit(e) {
    e.preventDefault();

    withdraw.collection('withdrawdata')

      .add({
        withdrawdata: amount,
        // number:number  

      })

      .then(() => {
        alert("winiing amount will be created 24 hours")
      })
      .catch((error) => {
        alert(error.message)
      });
    setAmount({ name: "", number: "", price: "" })

  }

  useEffect(() => {
    withdraw.collection("withdrawdata").onSnapshot(shot => {
      setFiredata(shot.docs.map(doc => ({
        // id: doc.id,
        withdrawdata: doc.data().withdrawdata
      })))
    })
  }, [])




  return (
    <div>
     
      <div className="deposit">
        <div className="withdrawform">
          {/* <h4>Withdraw</h4> */}
          <Alert className="veri">Provide correct details</Alert>

          <form onSubmit={hanldesubmit}>
            <input className="rank-data"
              required
              type="text"
              placeholder="Login Name"
              name="name"
              value={amount.name}
              onChange={handleWithdraw}

            /><br />
            <input className="rank-data"
              required
              type="number"
              placeholder="Login Number"
              name="number"
              value={amount.number}
              onChange={handleWithdraw}
            /><br />
            <input className="rank-data"
              type="number"
              required
              placeholder="Withdraw Amount"
              name="price"
              value={amount.price}
              onChange={handleWithdraw}
            />
            <button className="with-btn">withdarw</button>
          </form>
        </div>
      </div>
      <div onClick={() => deposit(false)} className="overlay"></div>
    </div>

  )
}

export default Withdraw;