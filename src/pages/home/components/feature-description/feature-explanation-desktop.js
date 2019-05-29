import React, { Component } from 'react'
import { spaces, textStyles } from '../../../../styles'
import styled from 'styled-components'
import Anchor from '../../../../components/anchor'

const Container = styled.div`
  background-image: url(${props => props.image});
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  height: 400px;
  margin-top: 24px;
  width: 100%;
`
const Headline = styled.h2`
  margin-right: 120px;
  padding-top: 100px;
  text-align: right;
  ${textStyles.h2Bold}
`

const Checklist = styled.img`
  align-self: center;
  height: ${spaces.relax}px;
  margin-right: ${spaces.cozy}px;
  margin-top: 0;
  width: ${spaces.relax}px;
`

const Text = styled.p`
  margin-top: 0;

  ${textStyles.h5}
`

const MyDiv = styled.div`
  display: flex;
`

class FeatureExplanationDesktop extends Component {
  render() {
    return (
      <Container image={this.props.image}>
        <Headline>{this.props.title}</Headline>
        <MyDiv style={{ marginLeft: '734px' }}>
          <Checklist src='https://res.cloudinary.com/apomarn/image/upload/v1559056569/WeDo/checklist.png' />
          <Text>{this.props.text1}</Text>
        </MyDiv>
        <MyDiv style={{ marginLeft: '750px' }}>
          <Checklist src='https://res.cloudinary.com/apomarn/image/upload/v1559056569/WeDo/checklist.png' />
          <Text>{this.props.text2}</Text>
        </MyDiv>
        <MyDiv style={{ marginLeft: '766px' }}>
          <Checklist src='https://res.cloudinary.com/apomarn/image/upload/v1559056569/WeDo/checklist.png' />
          <Text>{this.props.text3}</Text>
        </MyDiv>
        <Anchor to={this.props.to} flavor='rounded' style={{ marginLeft: '800px' }}>
          {this.props.button}
        </Anchor>
      </Container>
    )
  }
}

export default FeatureExplanationDesktop
