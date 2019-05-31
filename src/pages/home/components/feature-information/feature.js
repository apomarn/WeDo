import React, { Component } from 'react'
import { spaces, breakpoints, colors, textStyles } from '../../../../styles'
import styled from 'styled-components'
import Anchor from '../../../../components/anchor'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  min-width: 156px;
  margin: 16px 0;

  *:not(:last-child) {
    margin-bottom: ${spaces.comfortable}px;
  }
`

const Image = styled.img`
  align-self: center;
  width: ${spaces.relax * 5}px;
`

const Title = styled.h4`
  ${textStyles.h4Bold}
`

class Feature extends Component {
  render() {
    return (
      <Container>
        <Image src={this.props.image} />
        <Title>{this.props.title}</Title>
        <Anchor to="/" flavor="plain">
          {this.props.link}
        </Anchor>
      </Container>
    )
  }
}

export default Feature
