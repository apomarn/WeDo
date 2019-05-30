import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { spaces, breakpoints, colors, textStyles } from '../../../styles'
import styled from 'styled-components'
import Anchor from '../../../components/anchor'

const Headline = styled.h3`
  margin-bottom: ${spaces.comfortable}px;
  margin-top: ${spaces.cozy * 6}px;
  text-align: center;

  ${textStyles.h3Bold}

  @media screen and (min-width: ${breakpoints.desktop}px) {
    text-align: left;
    ${textStyles.h1Bold}
  }
`

const ActionsContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Couple = styled.img`
  bottom: -64px;
  height: 345px;
  position: absolute;
  right: -32px;
  width: 186px;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    bottom: -150px;
    height: 661px;
    right: 120px;
    width: 356px;
  }
`

const Container = styled.div`
  align-items: center;
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  height: ${spaces.cozy * 64}px;
  overflow: hidden;
  position: relative;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    align-items: flex-start;
    padding: 0 120px;
  }
`

class Hero extends Component {
  render() {
    return (
      <Container>
        <Headline>
          Wedding Planning <br /> Made Easy
        </Headline>
        <ActionsContainer>
          <Anchor to="/questions" flavor="rounded">
            Get Started
          </Anchor>
          <Anchor
            to="/find-couple"
            flavor="plain"
            style={{
              marginTop: spaces.comfortable
            }}
          >
            Find Couple
          </Anchor>
        </ActionsContainer>
        <Couple src="https://res.cloudinary.com/apomarn/image/upload/v1559000928/WeDo/couple_ydc0gx.png" />
      </Container>
    )
  }
}

export default Hero
