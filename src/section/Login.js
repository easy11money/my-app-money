import React,{useState} from "react"
import "../styles/login.css"
import {Link} from "react-router-dom"
import Home from "../pages/Home";
import {database} from '../firebase'
import {useNavigate} from "react-router-dom"



function Login(){
  const history = useNavigate()
    const[data,setData]= useState([])
  
  const[user,setUser] = useState({
    name:"",
    number:""
  })

function handleChange(e){
  const{name,value} = e.target
  setUser({
    ...user,
      [name] : value
    
  })
 
}

React.useEffect(() =>{
   if(localStorage.getItem("Auth"))  history("/home")
},[])

function Submit(e){
    e.preventDefault();
   
    setData([
      ...data,
       {
        text:user
      }
    ])
    setUser({name:"",number:""})
 
   
   database.collection('userdata')
     .add({
            datauser:user,
            // number:number  
      })

     .then(()=>{
      alert("Login Successfully")
     })
     .catch((error) =>{
      alert(error.message)
     });
    
     history("/home")   
   localStorage.setItem("Auth",true)
 
}






    return(
        <div onSubmit={Submit} className="login">
            <div>
            <form>
            <div className="login-flex">
            <i  style={{color:"#1fb3f0",fontSize:"29px"}} className="bi-moon-stars-fill"></i>
            <p className="login-title">easy11mone<h2 className="y">y</h2></p>
            </div>
             <h4 className="welcome">Welcome Back</h4>
             <div className="tele">
              <i style={{fontSize:"20px"}} className="bi-telegram"/>
              <p className="join-tele">Join Telegram</p>
             </div>
             <p className="and">________AND________</p>
             <div className="user-data">
             <input className="name"
                    required

                    type="text" 
                    placeholder="Yourname"
                    value={user.name}
                    name="name"
                    onChange={handleChange}
                  
                    /><br/>
             <input className="number" 
                      required 
                    type="number" 
                    placeholder="Phonenumber"
                 
                   name="number"
                   value={user.number}
                   onChange={handleChange}
                    />
             </div>
             <button  className="login-btn">Log In</button>
             </form>
         
            </div>
        </div>
    )
}

export default Login;