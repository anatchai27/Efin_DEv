import React, { useState } from "react";
import Iframe from "react-iframe";
import Split from "react-split";
require("../../Style/IndexPage.css");


export const IndexPageComponent = () => {
  const [chartAmout, setChartAmout] = useState([{ id: 0 }]);

  const SetDataComponents = () => {
    // let data = [...chartAmout, { id: chartAmout[chartAmout.length() - 1].id + 1 }];
    // setChartAmout(data);
  };

  return (
    <>
      <div style={{ height: "100%" }}>
        <Split className="split">
          <Iframe
            styles={{ height: "500px" }}
            url="https://mobile.efinancethai.com/HTML5/StockChartX/index.asp?user_id=98-juggrit"
          ></Iframe>
          <Iframe
            styles={{ height: "500px" }}
            url="https://mobile.efinancethai.com/HTML5/StockChartX/index.asp?user_id=98-juggrit"
          ></Iframe>
        </Split>
        <button onClick={SetDataComponents}>testbutton</button>
      </div>
    </>
  );
};

