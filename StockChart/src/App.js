import React from "react";
import Stock from "./Stock";
import SearchBar from "./SearchBar";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Stock Market</h1>
      <SearchBar placeholder="Example AAPL"></SearchBar>
      <Stock></Stock>
    </div>
  );
}

export default App;
