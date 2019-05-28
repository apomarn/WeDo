import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors, textStyles } from '../styles'

const roundedStyles = `
  color: ${colors.white};
  width: 328px;
  height: 56px;
  background-color: ${colors.primary};
  border-radius: 48px;
  line-height: 56px;
`

const StyledLink = styled(Link)`
  text-decoration: none;
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

class Anchor extends Component {
  render() {
    return (
      <StyledLink to={this.props.to} flavor={this.props.flavor} style={this.props.style}>
        {this.props.children}
      </StyledLink>
    )
  }
}

export default Anchor
