import React, { Component } from "react";

class HomeBanner extends Component {
  constructor() {
    super();
    this.state = {
      color: "Orange",
    };
  }

  render() {
    if (this.state.color === "Red") {
      return (
        <div>
          <button className="btn btn-danger">Red</button>
        </div>
      );
    } else if (this.state.color === "Blue") {
      return (
        <div>
          <button className="btn btn-primary">Blue</button>
        </div>
      );
    } else if (this.state.color === "Orange") {
      return (
        <div>
          <button className="btn btn-warning">Orange</button>
        </div>
      );
    }
  }
}

export default HomeBanner;
