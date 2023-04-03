import React, { useState, useEffect } from "react";
import Stock from "./Stock";
import Prediction from "./Prediction";

const PassText = ({ someText }) => {
  const [prediction, setPrediction] = useState(null);

  const handleStockDataChange = (newData) => {
    setPrediction(Math.floor(Math.random() * 2) === 1 ? "UP" : "DOWN");
  };

  useEffect(() => {
    if (someText.symbol) {
      setPrediction(Math.floor(Math.random() * 2) === 1 ? "UP" : "DOWN");
    }
  }, [someText.symbol]);

  return (
    <div>
      {someText.symbol && (
        <>
          <Stock sign={someText.symbol} setStockData={handleStockDataChange} />
          <div>
            The prediction is that this stock goes{" "}
            <span style={{ whiteSpace: "nowrap" }} class="predict">
              <strong>{prediction}</strong>
            </span>{" "}
            in price.
          </div>
        </>
      )}
    </div>
  );
};

export default PassText;
