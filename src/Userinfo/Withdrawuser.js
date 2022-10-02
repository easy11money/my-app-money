import React,{useEffect,useState} from "react"
import { withdraw } from "../section/Cre"
import "../styles/winprice.css";
function Drawuser(){
    const [firedata, setFiredata] = useState([])
    const [user,setUser] = useState("")
    useEffect(() => {
        withdraw.collection("withdrawdata").onSnapshot(shot => {
          setFiredata(shot.docs.map(doc => ({
            withdrawdata: doc.data().withdrawdata
          })))
        })
      }, [])
    return(
    <div>
      <h3>Withdraw Application:</h3>
          <div className="search-icon">
                    <i style={{ fontSize: "20px", color: "blue" }} className="bi-search" />
                    <input type="search"
                        className="search"
                        placeholder="Search your Wallet..."
                        onChange={(e) => setUser(e.target.value)}
                    />
                </div>
                <div>
                  <tr>
                    <th>S.NO</th>
                    <th>NAME</th>
                    <th>RANK</th>
                    <th>PRICE</th>
                    <th>NUMBER</th>
                </tr>
                {firedata.filter((item) => item.withdrawdata.name.toLowerCase().includes(user)).map((item, index) => (
                  <tr key={index}>
                  <th>{index +1}</th>
                  <th>{item?.withdrawdata.name}</th>
                  <th>{item?.withdrawdata.rank}</th>
                  <th>{item?.withdrawdata.price}</th>
                  <th>{item?.withdrawdata.number}</th>
                  </tr>
                    ))}
                  </div>      


      

   
    </div>
    )
}
export default Drawuser;
