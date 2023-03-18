// import React from "react";
import React, { useState } from "react";
import PassText from "./PassText";

function SearchBar({ placeholder }) {
  const [data, setData] = useState(null);
  // const [print, setPrint] = useState(false);
  // const [stockData, setStockData] = useState("AMZN");
  const [stockData, setStockData] = useState([]);

  function getData(val) {
    setData(val.target.value);
    console.warn(val.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // prevent the form from submitting by default
    setStockData(data);
    // return <PassText someText="AAPL" />;

    // setPrint();
    // setData(event.target.data);
    // console.log("Form submitted with input:", data);
    // return (
    //   <div>
    //     <div>among us</div>
    //     {/* <PassText someText={data} /> */}
    //   </div>
    // );
  };

  const handleInputChange = (event) => {
    setData(event.target.value);
  };

  return (
    <div>
      <form id="search-form" class="wholebar" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder={placeholder}
          value={data}
          onChange={handleInputChange}
        />
        {/* {print ? <h2>{data}</h2> : null} */}
      </form>
      {/* <h3>{stockData}</h3> */}
      <PassText someText={stockData} />
    </div>
  );
}

export default SearchBar;
