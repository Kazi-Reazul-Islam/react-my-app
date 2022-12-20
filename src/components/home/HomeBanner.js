import React, { Component } from "react";

class HomeBanner extends Component {
  constructor() {
    super();
  }

  myClick = () => {
    let text = this.myText.value;
    alert(text);
  };
  render() {
    return (
      <div>
        <input
          ref={(inputText) => {
            this.myText = inputText;
          }}
          type="text"
        />
        <button onClick={this.myClick}>Submit</button>
      </div>
    );
  }
}

export default HomeBanner;
