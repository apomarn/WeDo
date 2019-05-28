import React, { Component } from 'react';
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
      </div>
    );
  }
}

export default FeatureInformation;