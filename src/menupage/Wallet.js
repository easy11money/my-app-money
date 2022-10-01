import React,{useState} from 'react'
import Logo from "../imges/lgo.png"
import "../styles/wallet.css"
import {wallet} from "../map/Walletdetail"
import Withdraw from "../section/Credit";



function Wallet(){
    const [wallets,setWallet] = useState("")
    const [credit, setCredit] = useState(false)
    return(
        <div className={`${credit && "show-create-credit"}`}>
        <div>
            <div className='win-title'>
            <img className='sing-logo' src={Logo} alt="logo"/>
            <h3 className='wallet-title'>UsersWallet</h3>
            </div>
            <div className="search-icon">
                <i style={{ fontSize: "20px", color: "blue" }} className="bi-search" />
                <input type="search"
                    className="search"
                    placeholder="Search your Wallet..."
                    onChange={(e) => setWallet(e.target.value)}
                />
            </div>
            
            {wallet.filter((item) => item.name.toLowerCase().includes(wallets)).map((item, index) => (
            <div key={index} className='table-flex'>
                <thead>
                    <tr>
                   
                        
                        <th>
                         <p>{item.name}</p>
                         <p>{item.number}</p>
                         
                        </th>
                        <th>
                            <i className='bi-wallet-fill'/>
                            <p>₹{item.balance}</p>
                        </th>
                        <th  onClick={() => setCredit(true)}>
                            <button className='wallet-btn'>{item.withdraw}</button>
                         </th>
                       
                    </tr>
                </thead>
                </div>
                ))}
           




        </div>
        <Withdraw deposit={setCredit} />
        </div>
    )
}

export default Wallet;