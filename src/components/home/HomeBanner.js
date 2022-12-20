import React, { Component } from "react";

class HomeBanner extends Component {
  constructor() {
    super();
    this.state = {
      title: "Tap the button to see your country",
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <button onClick={() => this.setState({ title: "Bangladesh" })}>
          Bangladesh
        </button>
        <button onClick={() => this.setState({ title: "India" })}>India</button>
        <button onClick={() => this.setState({ title: "Nepal" })}>Nepal</button>
        <button onClick={() => this.setState({ title: "Bhutan" })}>
          Bhutan
        </button>
      </div>
    );
  }
}

export default HomeBanner;
