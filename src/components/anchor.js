import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'
import { colors, textStyles } from '../styles'

const roundedStyles = `
  color: ${colors.white};
  width: 328px;
  height: 56px;
  background-color: ${colors.primary};
  border-radius: 48px;
  line-height: 56px;
`

const sharedStyled = css`
  text-align: center;
  text-transform: uppercase;

  ${textStyles.h5Bold}

  ${props => {
    if (props.flavor === 'rounded') {
      return roundedStyles
    }

    if (props.flavor === 'plain') {
      return `color: ${colors.primary}`
    }
  }}
`

const StyledLink = styled(Link)`
  text-decoration: none;
  ${sharedStyled}
`

const StyledA = styled.a`
  text-decoration: none;
  ${sharedStyled}
`

const StyledButton = styled.button`
  border: none;
  cursor: pointer;
  ${sharedStyled}
`

class Anchor extends Component {
  render() {
    let Wrapper = StyledLink

    if (this.props.as === 'button') {
      Wrapper = StyledButton
    }

    if (this.props.as === 'a') {
      Wrapper = StyledA
    }

    return <Wrapper {...this.props}>{this.props.children}</Wrapper>
  }
}

export default Anchor
