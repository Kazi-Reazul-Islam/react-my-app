import React from "react";
import HomeBanner from "../components/home/HomeBanner";

const HomePage = () => {
  return (
    <div>
      <HomeBanner
        title={{ name: "Kazi Reazul Islam", age: "23", city: "Khulna" }}
      />
    </div>
  );
};

export default HomePage;
