import Hero from './components/hero'
import FeatureInformation from './components/feature-information'
import FeatureDescription from './components/feature-description'
import React, { Component } from 'react'

class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <FeatureInformation />
        <FeatureDescription />
      </div>
    )
  }
}

export default Home
