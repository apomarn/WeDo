import React, { Component } from 'react';
import Feature from "./feature"
import { spaces, breakpoints, colors, textStyles } from '../../../../styles'
import styled from 'styled-components'

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

class FeatureInformation extends Component {
  render() {
    return (
      <div>
        <Headline>Everything You Need In One Place</Headline>
        <Feature image="https://res.cloudinary.com/apomarn/image/upload/v1559053076/WeDo/image-calendar_rvkr5h.png" title="Calendarize Your Activities" link="Build Calendar" />
      </div>
    );
  }
}

export default FeatureInformation;