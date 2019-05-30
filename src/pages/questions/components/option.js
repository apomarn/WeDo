import React, { Component } from 'react'
import styled from 'styled-components'
import { textStyles, colors, breakpoints, spaces } from '../../../styles'

const Container = styled.div`
  background-color: ${colors.white};
  border: ${spaces.compact}px solid transparent;
  cursor: pointer;
  flex-grow: 1;
  height: ${spaces.cozy * 8}px;

  > p {
    line-height: ${spaces.cozy * 8}px;
    text-align: center;
    ${textStyles.h5}
  }

  @media screen and (min-width: ${breakpoints.desktop}px) {
    :hover {
      border: ${spaces.compact}px solid ${colors.brown};
    }
  }
`

class Option extends Component {
  render() {
    return (
      <Container {...this.props}>
        <p>{this.props.text}</p>
      </Container>
    )
  }
}

export default Option
