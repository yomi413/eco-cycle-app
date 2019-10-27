import React, { Component } from "react";

class Map extends Component {
  //   state = {
  //     location: {

  //   };

  componentDidMount() {
    fetch(
      "https://www.google.com/maps/embed/v1/search?key=AIzaSyByJVMVmqeE0wxBjw2XtKpLSUNh9sk06Q8&q=water+fountains+in+new+york+city",
      {
        credentials: "include",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        }
      }
    );
    //   .then(response => console.log(response.json()))
    //   .then(data => {
    //     this.setState({
    //       location: data
    //     });
    //   });
  }

  render() {
    return (
      <div>
        <h1>Map of Water Fountains in New York City</h1>
        <iframe
          width="450"
          height="250"
          frameborder="0"
          //   style="border:0"
          src="https://www.google.com/maps/embed/v1/search?key=AIzaSyByJVMVmqeE0wxBjw2XtKpLSUNh9sk06Q8&q=water+fountains+in+new+york+city"
          allowFullScreen
        ></iframe>

        <h1>Map of Trash Cans in New York City</h1>
        <iframe
          width="450"
          height="250"
          frameborder="0"
          //   style="border:0"
          src="https://www.google.com/maps/embed/v1/search?key=AIzaSyByJVMVmqeE0wxBjw2XtKpLSUNh9sk06Q8&q=trash+cans+in+new+york+city"
          allowFullScreen
        ></iframe>
      </div>
    );
  }
}

export default Map;
