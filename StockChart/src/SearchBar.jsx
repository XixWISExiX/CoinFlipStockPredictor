import React, { useState } from "react";
import PassText from "./PassText";

function SearchBar({ placeholder }) {
  const [data, setData] = useState("");
  const [stockData, setStockData] = useState("");

  const setPrediction = (prediction) => {
    setStockData((prevData) => ({ ...prevData, prediction }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setStockData({ symbol: data });
  };

  const handleInputChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <form id="search-form" className="wholebar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={data}
          onChange={handleInputChange}
        />
      </form>
      <PassText someText={stockData} setPrediction={setPrediction} />
    </div>
  );
}

export default SearchBar;
