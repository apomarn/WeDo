import React, { Component } from "react"
import { spaces, breakpoints, colors, textStyles } from "../../../../styles"
import styled from "styled-components"
import { Link } from "react-router-dom"
import Anchor from "../../../../components/anchor"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const Image = styled.img`
  align-self: center;
  width: ${spaces.relax * 5}px;
`

const Title = styled.h4`
  ${textStyles.h4Bold}
`

const MyLink = styled.p`
color: ${colors.primary}
margin: 0px;


${textStyles.h4Bold}
`

class Feature extends Component {
  render() {
    return (
      <Container>
        <Image src={this.props.image} />
        <Title>{this.props.title}</Title>
        <Anchor to="/" flavor="plain">{this.props.link}</Anchor>
      </Container>
    )
  }
}

export default Feature
