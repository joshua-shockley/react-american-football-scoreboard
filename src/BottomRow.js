import React, {useState, useEffect} from "react";
import "./App.css";
const BottomRow = () => {
  const [quarter, setQuarter] = useState(0);
  const [down, setDown] = useState(0);



  return (
    <div className="bottomRow">
      <div className="down">
        <h3 className="down__title">Down</h3>
        <div className="down__value">{down}</div>
       <button className="boardBtn" onClick = {() => setDown(down + 1)}>Dclick</button>
        <button className="boardBtn" onClick = {() => setDown(0)}>Clear</button>

      </div>
      <div className="toGo">
        <h3 className="toGo__title">To Go</h3>
        <div className="toGo__value">7</div>
      </div>
      <div className="ballOn">
        <h3 className="ballOn__title">Ball on</h3>
        <div className="ballOn__value">21</div>
      </div>
      <div className="quarter">
        <h3 className="quarter__title">Quarter</h3>
        <div className="quarter__value">{quarter}</div>
        <button className="boardBtn" onClick = {() => setQuarter(quarter + 1)}>Qclick</button>
        <button className="boardBtn" onClick = {() => setQuarter(0)}>Clear</button>
      </div>
    </div>
  );
};

export default BottomRow;
