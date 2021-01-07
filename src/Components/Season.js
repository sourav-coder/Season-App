import React from "react";
import "../styles.css"

const getSeason = (lat, month) => {
  if (month > 2 && month < 10) {
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const Season = (props) => {
  // console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth());
  const text =
    season === "winter" ? "Burr ! Its Chilly" : "Let's hit the beach";
  const icon = season === "winter" ? "snowflake massive icon" : "massive sun icon";
  
  // console.log(season);
  


  return (
    <div className={season}>
      <i  className={` ${icon} icon-Left `}></i>

      <h1 className="seasonText">{text}</h1>
      <i className={` ${icon} icon-Right `}></i>
    </div>
  );
};

export default Season;
