import React from "react";

const HomeBanner = (props) => {
  return (
    <div>
      <h1>
        {props.title} {props.subTitle}
      </h1>
      <h1>{props.greeting}</h1>
    </div>
  );
};

export default HomeBanner;
