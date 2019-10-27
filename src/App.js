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
        <i>
          <h4>To reuse, to recycle, to be resourceful New Yorkers.</h4>
        </i>
      </center>

      <center>
        <h1>Welcome to EcoCycle</h1>
      </center>

      <h3>Who We Are</h3>
      <p>
        EcoCycle is a company dedicated to help the environment by providing a
        way for New Yorkers to dispose of their trash and recyclables properly,
        as well as helping find water fountains that will allow for refilling
        reusable water bottles.{" "}
      </p>

      <h3>Objective</h3>
      <p>
        Don't you hate walking on the street and having to hold on to garbage
        because you can't find a trash bin? How about being unsure whether the
        item you want to dispose of is recyclable or not? Or what if you want to
        reuse your water bottle instead of disposing it? These are some of the
        problems that EcoCycle wants to tackle. We aim to assist users in New
        York City in finding proper trash and recycling bins in public spaces,
        as well as finding good sources of drinking water from clean and usable
        water fountains. Better yet, we want to do this with the help of all New
        Yorkers! By providing a rating system for the water fountains, users
        will be able to get information on how clean the water fountain near
        them is. All users can benefit from having access to basic information
        that can help keep our city streets clean. We help the environment while
        also being resourceful.
      </p>

      <h3>Join Us!</h3>
      <p>
        <a href="#">Download</a> the app and join us in saving our environment!
      </p>

      <Map />
    </div>
  );
}

export default App;
