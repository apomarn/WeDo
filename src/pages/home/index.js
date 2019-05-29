import Hero from './components/hero'
import Navbar from '../navbar'
import FeatureInformation from './components/feature-information'
import FeatureDescription from './components/feature-description'
import React, { Component } from 'react'
import FooterCTA from './components/footer-cta'
import Footer from './components/footer'

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Hero />
        <FeatureInformation />
        <FeatureDescription />
        <FooterCTA />
        <Footer />
      </div>
    )
  }
}

export default Home
