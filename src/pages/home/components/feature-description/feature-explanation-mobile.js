import React, { Component } from 'react'
import { spaces, breakpoints, colors, textStyles } from '../../../../styles'
import styled from 'styled-components'
import Anchor from '../../../../components/anchor'

const Headline = styled.h3`
  margin: ${spaces.relax}px ${spaces.comfortable}px;

  text-align: left;

  ${textStyles.h3Bold}

  @media screen and (min-width: ${breakpoints.desktop}px) {
    margin: 0 
    ${textStyles.h2Bold}
  }
`

const Checklist = styled.img`
  width: ${spaces.relax}px;
  height: ${spaces.relax}px;
  align-self: center;
  margin-right: ${spaces.cozy}px;
`

const MyDiv = styled.div`
  display: flex;
  margin: 0 ${spaces.comfortable}px ${spaces.comfortable}px ${spaces.comfortable}px;
`

const Text = styled.div`
  ${textStyles.h5}
`

class FeatureExplanationMobile extends Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <img src={this.props.image} />
        <Headline>{this.props.title}</Headline>
        <MyDiv>
          <Checklist src='https://res.cloudinary.com/apomarn/image/upload/v1559056569/WeDo/checklist.png' />
          <Text>{this.props.text1}</Text>
        </MyDiv>
        <MyDiv>
          <Checklist src='https://res.cloudinary.com/apomarn/image/upload/v1559056569/WeDo/checklist.png' />
          <Text>{this.props.text2}</Text>
        </MyDiv>
        <MyDiv>
          <Checklist src='https://res.cloudinary.com/apomarn/image/upload/v1559056569/WeDo/checklist.png' />
          <Text>{this.props.text3}</Text>
        </MyDiv>
        <Anchor to={this.props.to} flavor='rounded' style={{ marginTop: '8px' }}>
          {this.props.button}
        </Anchor>
      </div>
    )
  }
}

export default FeatureExplanationMobile
