import React, { Component } from 'react';
import FeatureExplanation from "./feature-explanation"


class FeatureDescription extends Component {
  render() {
    return (
      <div>
        <FeatureExplanation image="" title="Share With Us Your Story and Inspire Others" text1="Tell everyone about your amazing wedding" text2="Share pictures" text3="Read peoples opinion and their wedding stories" button="BUILD YOUR STORY"></FeatureExplanation>
        <FeatureExplanation image="" title="Guess List" text1="Add, edit or delete your guests" text2="Enter all the people you're inviting into our tool" text3="We will keep count of all your guest for you" button="BUILD YOUR LIST"></FeatureExplanation>
        <FeatureExplanation image="" title="The Best, Most Easy To Plan Your Activities" text1="Add,edit, or delete tasks" text2="Easy to customize with your wedding details" text3="???????????" button="BUILD CALENDAR"></FeatureExplanation>
      </div>
    );
  }
}

export default FeatureDescription;