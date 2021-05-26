import React from "react";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import "./styling/App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Homepage />
    </div>
  );
}

export default App;
