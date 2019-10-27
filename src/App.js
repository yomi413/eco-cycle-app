import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Map from "./Map";
import Search from "./Search";
import NavBar from "./NavBar";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div>
      <NavBar />
      <center>
        <h1>Welcome to EcoCycle!</h1>

        <h4>
          Our goal is to provide a system that can simplify how to determine
          what gets recycled and how, where to find the nearest water fountains
          and where to find the nearest trash cans.{" "}
        </h4>

        <Search />

        <Map />
      </center>
    </div>

    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
