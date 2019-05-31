import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, spaces, textStyles, breakpoints } from '../../../styles'
import Anchor from '../../../components/anchor'

const Container = styled.div`
  align-items: center;
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  margin: ${spaces.cozy}px;
  padding: ${spaces.relax}px;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    min-width: unset;
  }
`

const Image = styled.img`
  border-radius: 50%;
  height: ${spaces.cozy * 10}px;
  margin-bottom: ${spaces.cozy}px;
  object-fit: cover;
  width: ${spaces.cozy * 10}px;
`

const Name = styled.label`
  margin-bottom: ${spaces.cozy}px;
  ${textStyles.h3}
`

const Count = styled.label`
  margin-bottom: ${spaces.cozy}px;
  ${textStyles.h2Bold}
`

const Subtitle = styled.label`
  margin-bottom: ${spaces.relax}px !important;
  ${textStyles.h5}
`

const StyledAnchor = styled(Anchor)`
  color: ${colors.brown};
  text-transform: unset;
`

class Counter extends Component {
  render() {
    const isZero = Number(this.props.count) === 0

    const to = isZero ? this.props.fallbackTo : this.props.to
    return (
      <Container>
        <Image src={this.props.image} />
        <Name>{this.props.name}</Name>
        <Count>{this.props.count}</Count>
        <Subtitle>{this.props.subtitle}</Subtitle>
        <StyledAnchor flavor="plain" to={to}>
          {isZero ? this.props.fallbackText : this.props.linkText}
        </StyledAnchor>
      </Container>
    )
  }
}

export default Counter
