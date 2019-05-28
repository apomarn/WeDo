import Hero from "./components/hero";
import FeatureInformation from "./components/feature-information/index";
import Feature from "./components/feature-information/feature";

import React, { Component } from "react";

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <FeatureInformation />
        <Feature image="https://res.cloudinary.com/apomarn/image/upload/v1559053076/WeDo/image-calendar_rvkr5h.png" title="Calendarize Your Activities" link="Build Calendar" />
      </div>
    );
  }
}

export default Home;
