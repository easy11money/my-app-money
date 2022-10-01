import React, { useState } from "react";
import { leaddata } from "../map/Ldata";
import Wait from "../imges/waiting.jpeg";

export default function LeaderData() {
    const [search, setSearch] = useState("")
    // const shuffledArray = leaddata.sort((a,b) => 0.5 - Math.random());
    console.log(leaddata)
    return (
        <div>
            <div className="search-icon">
                <i style={{ fontSize: "20px", color: "black" }} className="bi-search" />
                <input type="search"
                    className="search"
                    placeholder="Search your name..."
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>
            {leaddata.length !== 0 ?
                <table>
                    <thead>
                        <tr>
                            <th style={{ opacity: "0.5" }} className="rank">Players</th>
                            {/* <th style={{ opacity: "0.5" }}>Number</th> */}
                            <th style={{ opacity: "0.5" }}>Rank</th>

                        </tr>
                    </thead>
                    <tbody>

                        {leaddata.filter((item) => item.name.toLocaleLowerCase().includes(search)).map((item, index) => (
                            <tr>
                                <td>
                                    <div className="tab-icon">
                                        <i className="bi-person-circle" style={{ fontSize: "25px", color: "gray" }} />
                                        <h3>{item.name}</h3>
                                    </div>
                                    <p className="withdarw">{item.won}</p>

                                </td>
                                {/* <td>{item.number}</td> */}
                                <td>{item.rank}</td>
                            </tr>
                        ))}

                    </tbody>
                </table>
                : <div className="wait-ogo">
                    <p className="wa">Leaderboard will show after registration full</p>
                    <img className="wait-pic" src={Wait} alt="logo" />
                    <p className="wa">Be the first one to join this contest &amp;</p>
                    <p className="wal">start Winning</p>
                    <button className="pool-pay">Join contest</button>
                </div>
            }

        </div>
    )
}

