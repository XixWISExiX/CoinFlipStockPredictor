import React, { useState } from "react";
import Stock from "./Stock";
import SearchBar from "./SearchBar";
import "./App.css";
import PassText from "./PassText";

function App() {
  return (
    <div className="App">
      <h1>Stock Market</h1>
      <SearchBar placeholder="Example AAPL" />
    </div>
  );
}

export default App;
