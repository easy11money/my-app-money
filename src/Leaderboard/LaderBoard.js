import React from "react";
import { Link } from "react-router-dom";
import "../styles/leader.css";
import { registration, sunday } from "../map/Homemap";
import { Tabs, Tab, Box, Typography } from "@mui/material"
import Winner from "../Leaderboard/Winner"
import LData from "../Leaderboard/Leaderdata"
import Section from "../section/Header";


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );

}
function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}
function Leader() {

  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <>
      <div className="sunday-match">
        <div className="contest">
          <div className="contests">
            <Link className="back-arrow" to="/sunday">
              <i style={{ fontSize: "25px" }} className="bi-arrow-left" />
            </Link>
            <div className="sunday-gap">
              <p className="party">{registration[0].tourname}</p>
            </div>
            <div>
              <i style={{ color: "gold" }} className="bi-trophy-fill" />
              <span style={{ color: "gold", paddingLeft: "10px" }}>{registration[0].price}</span>
            </div>


          </div>
        </div>
      </div>
      <div className="join">
        {sunday.map((item, index) => (
          <div key={index} className="contest-card">
            <div className="margin">
              <div className="contest-top">
                <p>Price Pool</p>

                <p className="live">{item.live}</p>
              </div>
              <div className="contest-prize">
                <p className="pool">{item.totalprice}</p>
              </div>
              <progress className="player-progress" value={item.value} max={100}></progress>
              <div className="players">
                <p className="total-player">{item.spots}</p>
                <p className="spots">{item.left}</p>

              </div>
              <Link to="https://www.google.com" className="pay-len">JOIN {item.pay}</Link>
            </div>
            <div className="contest-bottom bg">
              <div className="first-price">
                <p className="sunprice">{item.firstprice}</p>
                <div className="percen-flex">
                  <i className="bi-trophy" />
                  <p>{item.percentage}</p>
                </div>
              </div>
              <div className="mark">
                <i class="bi-check-circle-fill" style={{ color: "green" }} role="img" aria-label="GitHub"></i>

                <p>Garanteed</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="tabs">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs
            TabIndicatorProps={{ style: { background: "red", height: "3px" } }}
            value={value}
            textColor="black"
            onChange={handleChange}
            aria-label="basic tabs example">
            <Tab style={{ textTransform: "none", fontSize: "16px" }} label="Winnnings" {...a11yProps(0)} />
            <Tab style={{ textTransform: "none", fontSize: "16px" }} label="Leaderboard" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Winner />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <LData />
        </TabPanel>
        <Section />
      </div>
    </>

  )
}

export default Leader;