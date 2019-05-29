import React, { Component } from 'react'
import Feature from './feature'
import { spaces, breakpoints, colors, textStyles } from '../../../../styles'
import styled from 'styled-components'
import Carousel from 'nuka-carousel'
import Media from 'react-media'

const Headline = styled.h2`
  margin-bottom: ${spaces.relax}px;
  margin-top: ${spaces.cozy * 6}px;
  text-align: center;

  ${textStyles.h2Bold}

  @media screen and (min-width: ${breakpoints.desktop}px) {
    text-align: center;
    ${textStyles.h1Bold}
  }
`

const FeatureMobile = [
  {
    image: 'https://res.cloudinary.com/apomarn/image/upload/v1559053076/WeDo/image-calendar.png',
    title: 'Calendarize Your Activities',
    link: 'Build Calendar'
  },
  {
    image: 'https://res.cloudinary.com/apomarn/image/upload/v1559053097/WeDo/image-guest-list.png',
    title: 'List Your Guests',
    link: 'Build Your List'
  },
  {
    image: 'https://res.cloudinary.com/apomarn/image/upload/v1559053117/WeDo/image-wedding-story.png',
    title: 'Share Your Wedding',
    link: 'Build Your Story'
  },
  {
    image: 'https://res.cloudinary.com/apomarn/image/upload/v1559053056/WeDo/image-announcement.png',
    title: 'Announce Your Wedding',
    link: 'Build a Plan'
  },
  {
    image: 'https://res.cloudinary.com/apomarn/image/upload/v1559053116/WeDo/image-vendors.png',
    title: 'Vendors Contact Information',
    link: 'Contact Them'
  },
  {
    image: 'https://res.cloudinary.com/apomarn/image/upload/v1559053090/WeDo/image-core-decisions.png',
    title: 'Core Decisions',
    link: 'Plan it Out'
  }
]

class FeatureInformation extends Component {
  render() {
    return (
      <div>
        <Media query={`(max-width: ${breakpoints.desktop}px)`}>
          {matches =>
            matches ? (
              <>
                <Headline>Everything You Need In One Place</Headline>
                <Carousel
                  renderCenterLeftControls={({ previousSlide }) => (
                    <button onClick={previousSlide}>
                      <img
                        alt='leftArrow'
                        src='https://res.cloudinary.com/apomarn/image/upload/v1559083267/WeDo/left-arrow.png'
                      />
                    </button>
                  )}
                  renderCenterRightControls={({ nextSlide }) => (
                    <button onClick={nextSlide}>
                      <img
                        alt='rightArrow'
                        src='https://res.cloudinary.com/apomarn/image/upload/v1559083266/WeDo/right-arrow.png'
                      />
                    </button>
                  )}
                >
                  {FeatureMobile.map(feature => {
                    return <Feature {...feature} key={feature.image} />
                  })}
                </Carousel>
              </>
            ) : (
              <>
                <Headline>Everything You Need In One Place</Headline>
                <div style={{ display: 'flex', justifyContent: 'space-around' }}>
                  {FeatureMobile.splice(0, 3).map(feature => {
                    return <Feature {...feature} key={feature.image} />
                  })}
                </div>
              </>
            )
          }
        </Media>
      </div>
    )
  }
}

export default FeatureInformation
