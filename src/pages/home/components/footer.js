import React, { Component } from 'react'
import { spaces, breakpoints, colors, textStyles } from '../../../styles'
import styled from 'styled-components'

const Container = styled.div`
  background-color: ${colors.brown};
  height: ${spaces.compact * 10}px;
`

const Headline = styled.div`
  color: ${colors.white};
  padding-top: 12px;
  text-align: center;
  ${textStyles.h6Bold}
`

class Footer extends Component {
  render() {
    return (
      <Container>
        <Headline>Built by Anghy Pomar</Headline>
      </Container>
    )
  }
}

export default Footer
