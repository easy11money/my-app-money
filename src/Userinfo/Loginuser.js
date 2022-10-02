import React,{useEffect,useState} from "react"
import { database } from "../firebase"
import "../styles/winprice.css";

function Loginuser(){
    const [login, setLogin] = useState([])
    const [user,setUser] = useState("")
    console.log(login)
    useEffect(() => {
        database.collection("userdata").onSnapshot(shot => {
          setLogin(shot.docs.map(doc => ({
            datauser: doc.data().datauser
          })))
        })
      }, [])
    return(
    <div>
      <h3>LOGIN USERS</h3>
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
                    <th>number</th>
                    
                </tr>
                {login.filter((item) => item.datauser.name.toLowerCase().includes(user)).map((item, index) => (
                  <tr key={index}>
                  <th>{index +1}</th>
                  <th>{item?.datauser.name}</th>
                  <th>{item?.datauser.number}</th>
         
                  </tr>
                    ))}
                  </div>      


      

   
    </div>
    )
}
export default Loginuser;
