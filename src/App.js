import React from "react";
import { useSelector } from "react-redux";
import Blog from "./components/Blog";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import { selectSignedIn } from "./feature/userSlice";
import "./styling/App.css";

function App() {
  const isSignedIn = useSelector(selectSignedIn);

  return (
    <div className="App">
      <Navbar />
      <Homepage />
      {isSignedIn && <Blog />}
    </div>
  );
}

export default App;
