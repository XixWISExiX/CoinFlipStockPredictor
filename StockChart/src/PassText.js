import React from "react";
import Stock from "./Stock";

const PassText = (props) => {
  const symbol = `${props.someText}`;
  return (
    <div>
      <h1>{symbol}</h1>
      {/* THIS VALUE NEEDS TO UPDATE AND GO THROUGH */}
      <Stock sign={symbol} />
    </div>
  );
};

export default PassText;
