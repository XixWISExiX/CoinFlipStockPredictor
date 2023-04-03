import React, { useState } from "react";

const Prediction = (props) => {
  let predictNum = Math.floor(Math.random() * props.pred);
  if (predictNum === 1) return <span style={{ whiteSpace: "nowrap" }}>up</span>;
  else return <span style={{ whiteSpace: "nowrap" }}>down</span>;
};

export default Prediction;
