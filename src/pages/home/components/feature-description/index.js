import FeatureExplanationDesktop from './feature-explanation-desktop'
import FeatureExplanationMobile from './feature-explanation-mobile'
import Media from 'react-media'
import React, { Component } from 'react'
import { breakpoints } from '../../../../styles'

const featureExplanation = [
  {
    image: 'https://res.cloudinary.com/apomarn/image/upload/v1559062585/WeDo/calendar-container.png',
    title: 'Share With Us Your Story and Inspire Others',
    text1: 'Tell everyone about your amazing wedding',
    text2: 'Share pictures',
    text3: 'Read peoples opinion and their wedding stories',
    to: '/share-story',
    button: 'BUILD YOUR STORY'
  },
  {
    image: 'https://res.cloudinary.com/apomarn/image/upload/v1559062585/WeDo/calendar-container.png',
    title: 'Guess List',
    text1: 'Add, edit or delete your guests',
    text2: "Enter all the people you're inviting into our tool",
    text3: 'We will keep count of all your guest for you',
    to: '/guest-list',
    button: 'BUILD YOUR LIST'
  },
  {
    image: 'https://res.cloudinary.com/apomarn/image/upload/v1559062585/WeDo/calendar-container.png',
    title: 'The Best, Most Easy To Plan Your Activities',
    text1: 'Add, edit, or delete tasks',
    text2: 'Easy to customize with your wedding details',
    text3: '???????????',
    to: '/calendar',
    button: 'BUILD CALENDAR'
  }
]

class FeatureDescription extends Component {
  render() {
    return (
      <div>
        <Media query={`(max-width: ${breakpoints.desktop}px)`}>
          {matches =>
            matches ? (
              <>
                {featureExplanation.map(feature => {
                  return <FeatureExplanationMobile {...feature} key={feature.title} />
                })}
              </>
            ) : (
              <>
                {featureExplanation.map(feature => {
                  return <FeatureExplanationDesktop {...feature} key={feature.title} />
                })}
              </>
            )
          }
        </Media>
      </div>
    )
  }
}

export default FeatureDescription
