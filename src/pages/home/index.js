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
        
      </div>
    );
  }
}

export default Home;
