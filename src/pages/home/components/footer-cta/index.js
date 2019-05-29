import React, { Component } from 'react'
import { spaces, colors, textStyles } from '../../../../styles'
import styled from 'styled-components'
import Anchor from '../../../../components/anchor'

const Container = styled.div`
  height: 285px;
  background-color: ${colors.green};
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`

const Headline = styled.h2`
  color: ${colors.brown};
  margin-bottom: ${spaces.relax}px
  margin-top: ${spaces.relax * 2}px;
  ${textStyles.h3Bold};
`

const Div = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: ${spaces.relax}px;
`

class FooterCTA extends Component {
  render() {
    return (
      <Container>
        <Headline>Ready When You Are</Headline>
        <Anchor to='/' flavor='rounded' style={{ width: '200px' }}>
          Get Started
        </Anchor>
        <Div>
          <img
            alt='champagne'
            width='82px'
            height='82px'
            margin='0 48px'
            src='https://res.cloudinary.com/apomarn/image/upload/v1559139269/WeDo/footer-champagne.png'
          />
          <img
            alt='fireworks'
            width='70px'
            height='70px'
            margin='0 48px'
            src='https://res.cloudinary.com/apomarn/image/upload/v1559139269/WeDo/footer-fireworks.png'
          />
          <img
            alt='rings'
            width='79px'
            height='79px'
            margin='0 48px'
            src='https://res.cloudinary.com/apomarn/image/upload/v1559139269/WeDo/footer-rings.png'
          />
        </Div>
      </Container>
    )
  }
}

export default FooterCTA
