import React, { Component } from "react";

class HomeBanner extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <p>{this.props.subTitle}</p>
      </div>
    );
  }
}

export default HomeBanner;
