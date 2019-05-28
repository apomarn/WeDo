import React, { Component } from 'react';
import FeatureExplanationMobile from "./feature-explanation-mobile"
import FeatureExplanationDesktop from "./feature-explanation-desktop"

class FeatureDescription extends Component {
  render() {
    return (
      <div>
        <FeatureExplanationMobile image="" title="Share With Us Your Story and Inspire Others" text1="Tell everyone about your amazing wedding" text2="Share pictures" text3="Read peoples opinion and their wedding stories" to="/share-story" button="BUILD YOUR STORY"></FeatureExplanationMobile>
        <FeatureExplanationMobile image="" title="Guess List" text1="Add, edit or delete your guests" text2="Enter all the people you're inviting into our tool" text3="We will keep count of all your guest for you" to="/guest-list" button="BUILD YOUR LIST"></FeatureExplanationMobile>
        <FeatureExplanationMobile image="" title="The Best, Most Easy To Plan Your Activities" text1="Add, edit, or delete tasks" text2="Easy to customize with your wedding details" text3="???????????" to="/calendar" button="BUILD CALENDAR"></FeatureExplanationMobile>      
        <FeatureExplanationDesktop image="https://res.cloudinary.com/apomarn/image/upload/v1559062585/WeDo/calendar-container.png" title="The Best, Most Easy To Plan Your Activities" text1="Add,edit, or delete tasks" text2="Easy to customize with your wedding details" text3="???????????" to="/calendar" button="BUILD CALENDAR" />
        <FeatureExplanationDesktop image="https://res.cloudinary.com/apomarn/image/upload/v1559062585/WeDo/calendar-container.png" title="The Best, Most Easy To Plan Your Activities" text1="Add,edit, or delete tasks" text2="Easy to customize with your wedding details" text3="???????????" to="/calendar" button="BUILD CALENDAR" />

      </div>
    );
  }
}

export default FeatureDescription;