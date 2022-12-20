import { Component } from "react";
import HomeBanner from "../components/home/HomeBanner";

class HomePage extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div>
        <HomeBanner />
      </div>
    );
  }
}

export default HomePage;
