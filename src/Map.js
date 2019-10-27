import React, { Component } from "react";
import { Table } from "react-bootstrap";

class Map extends Component {
  //   state = {
  //     location: {

  //   };

  // componentDidMount() {
  //   fetch(
  //     "https://www.google.com/maps/embed/v1/search?key=AIzaSyByJVMVmqeE0wxBjw2XtKpLSUNh9sk06Q8&q=water+fountains+in+new+york+city",
  //     {
  //       credentials: "include",
  //       method: "POST",
  //       headers: {
  //         "Content-Type": "application/json",
  //         Accept: "application/json"
  //       }
  //     }
  //   );
  //   .then(response => console.log(response.json()))
  //   .then(data => {
  //     this.setState({
  //       location: data
  //     });
  //   });
  // }

  render() {
    return (
      <Table className="table">
        <thead>
          <tr>
            <th>
              <center>
                <h6 id="map-header-one">Map of Water Fountains</h6>
              </center>
            </th>
            <th>
              <center>
                <h6 id="map-header-two">Map of Trash Bins</h6>
              </center>
            </th>
            <th>
              <center>
                <h6>Map of Recycling Bins</h6>
              </center>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <iframe
                width="250"
                height="150"
                frameborder="0"
                //   style="border:0"
                src="https://www.google.com/maps/embed/v1/search?key=AIzaSyByJVMVmqeE0wxBjw2XtKpLSUNh9sk06Q8&q=water+fountains+in+new+york+city"
                allowFullScreen
              ></iframe>
            </td>

            <td>
              <iframe
                width="250"
                height="150"
                frameborder="0"
                //   style="border:0"
                src="https://www.google.com/maps/embed/v1/search?key=AIzaSyByJVMVmqeE0wxBjw2XtKpLSUNh9sk06Q8&q=trash+cans+in+new+york+city"
                allowFullScreen
              ></iframe>
            </td>

            <td>
              <iframe
                width="250"
                height="150"
                frameborder="0"
                //   style="border:0"
                src="https://www.google.com/maps/embed/v1/search?key=AIzaSyByJVMVmqeE0wxBjw2XtKpLSUNh9sk06Q8&q=recycling+bins+in+new+york+city"
                allowFullScreen
              ></iframe>
            </td>
          </tr>
        </tbody>
      </Table>

      // <div>
      //   <center>
      //     <h3 id="map-header-one">Map of Water Fountains in New York City</h3>

      //     <iframe
      //       width="450"
      //       height="250"
      //       frameborder="0"
      //       //   style="border:0"
      //       src="https://www.google.com/maps/embed/v1/search?key=AIzaSyByJVMVmqeE0wxBjw2XtKpLSUNh9sk06Q8&q=water+fountains+in+new+york+city"
      //       allowFullScreen
      //     ></iframe>

      //     <h3 id="map-header-two">Map of Trash Bins in New York City</h3>

      //     <iframe
      //       width="450"
      //       height="250"
      //       frameborder="0"
      //       //   style="border:0"
      //       src="https://www.google.com/maps/embed/v1/search?key=AIzaSyByJVMVmqeE0wxBjw2XtKpLSUNh9sk06Q8&q=trash+cans+in+new+york+city"
      //       allowFullScreen
      //     ></iframe>

      //     <h3>Map of Recycling Bins in New York City</h3>

      //     <iframe
      //       width="450"
      //       height="250"
      //       frameborder="0"
      //       //   style="border:0"
      //       src="https://www.google.com/maps/embed/v1/search?key=AIzaSyByJVMVmqeE0wxBjw2XtKpLSUNh9sk06Q8&q=recycling+bins+in+new+york+city"
      //       allowFullScreen
      //     ></iframe>
      //   </center>
      // </div>
    );
  }
}

export default Map;
