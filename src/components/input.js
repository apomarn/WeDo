import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, spaces, textStyles } from '../styles'

const Container = styled.input`
  background-color: ${colors.white};
  border-radius: ${spaces.cozy}px;
  border: none;
  box-sizing: border-box;
  height: ${spaces.cozy * 5}px;
  line-height: ${spaces.cozy * 5}px;
  padding: 0 ${spaces.comfortable}px;
  width: 100%;

  ${textStyles.h5}
`

class Input extends Component {
  render() {
    return <Container {...this.props} spellcheck="false" />
  }
}

export default Input
