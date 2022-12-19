import React from "react";

const HomeBanner = (props) => {
  return (
    <div>
      <h1>{props.title.name}</h1>
      <h1>{props.title.age}</h1>
      <h1>{props.title.city}</h1>
    </div>
  );
};

export default HomeBanner;
