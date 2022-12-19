import React, { useState } from "react";

const HomeBanner = () => {
  const [title, setTitle] = useState("Bangladesh is small country");

  const changeTitle = () => {
    setTitle("Bangladesh is populated country");
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Click To Change</button>
    </div>
  );
};

export default HomeBanner;
