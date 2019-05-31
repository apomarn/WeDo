import React, { Component } from 'react'
import styled from 'styled-components'
import Feature from './feature'
import { spaces, breakpoints, colors, textStyles } from '../../../../styles'
import { images } from '../../../../utils'

const Headline = styled.h2`
  padding: 0 ${spaces.comfortable}px;
  margin-bottom: ${spaces.cozy * 6}px;
  margin-top: ${spaces.cozy * 6}px;
  text-align: center;

  ${textStyles.h2Bold}

  @media screen and (min-width: ${breakpoints.desktop}px) {
    text-align: center;
    ${textStyles.h1Bold}
  }
`

const FeaturesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: ${spaces.cozy * 6}px;
`

const features = [
  {
    image: images.questionary,
    title: 'Questionary',
    link: 'Get Started',
    linkTo: '/questions'
  },
  {
    image: images.guestList,
    title: 'List Your Guests',
    link: 'Build Your List',
    linkTo: '/guest-list'
  },
  {
    image: images.story,
    title: 'Share Your Wedding',
    link: 'Get Inspired Now',
    linkTo: '/stories'
  }
]

class FeatureInformation extends Component {
  render() {
    return (
      <div>
        <Headline>Everything You Need In One Place</Headline>
        <FeaturesContainer>
          {features.map(feature => {
            return <Feature {...feature} key={feature.image} />
          })}
        </FeaturesContainer>
      </div>
    )
  }
}

export default FeatureInformation
