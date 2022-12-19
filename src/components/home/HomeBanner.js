import React, { useState } from "react";

const HomeBanner = () => {
  const [color, setColor] = useState("Orange");

  if (color === "Red") {
    return (
      <div>
        <h1 style={{ color: "Red" }}>This is Red Color</h1>
      </div>
    );
  } else if (color === "Blue") {
    return (
      <div>
        <h1 style={{ color: "Blue" }}>This is Blue Color</h1>
      </div>
    );
  } else if (color === "Green") {
    return (
      <div>
        <h1 style={{ color: "Green" }}>This is Green Color</h1>
      </div>
    );
  } else if (color === "Orange") {
    return (
      <div>
        <h1 style={{ color: "Orange" }}>This is Orange Color</h1>
      </div>
    );
  }
};

export default HomeBanner;
