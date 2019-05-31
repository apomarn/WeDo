import Hero from './components/hero'
import Navbar from '../../components/navbar'
import FeatureInformation from './components/feature-information'
import FeatureDescription from './components/feature-description'
import React, { Component } from 'react'
import FooterCTA from './components/footer-cta'
import Footer from './components/footer'

class Home extends Component {
  render() {
    return (
      <>
        <Navbar user={this.props.user} />
        <Hero />
        <FeatureInformation />
        <FeatureDescription />
        <FooterCTA />
        <Footer />
      </>
    )
  }
}

export default Home
