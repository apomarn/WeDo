import React, { Component } from "react"
import { spaces, breakpoints, colors, textStyles } from "../../../../styles"
import styled from "styled-components"
import Anchor from "../../../../components/anchor"


const Container = styled.div`
  background-image: url(${props => props.image});
  width: 100%;
  height: 400px;
  display: flex;
  flex-direction: column;
  margin-top: 24px;
`
const Headline = styled.h2`
  text-align: right;
  padding-top: 100px;
  margin-right: 120px;
  ${textStyles.h2Bold}
`

const Checklist = styled.img`
  width: ${spaces.relax}px;
  height: ${spaces.relax}px;
  align-self: center;
  margin-top: 0;
  margin-right: ${spaces.cozy}px;
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
        <MyDiv style={{marginLeft: "734px"}}>
        <Checklist src="https://res.cloudinary.com/apomarn/image/upload/v1559056569/WeDo/checklist.png"></Checklist>
        <Text>{this.props.text1}</Text>
        </MyDiv>
        <MyDiv style={{marginLeft: "750px"}}>
        <Checklist src="https://res.cloudinary.com/apomarn/image/upload/v1559056569/WeDo/checklist.png"></Checklist>
        <Text>{this.props.text2}</Text>
        </MyDiv>
        <MyDiv style={{marginLeft: "766px"}}>
        <Checklist src="https://res.cloudinary.com/apomarn/image/upload/v1559056569/WeDo/checklist.png"></Checklist>
        <Text>{this.props.text3}</Text>
        </MyDiv>
        <Anchor to={this.props.to} flavor="rounded" style={{marginLeft: "800px" }}>{this.props.button}</Anchor>
      </Container>
    )
  }
}

export default FeatureExplanationDesktop
