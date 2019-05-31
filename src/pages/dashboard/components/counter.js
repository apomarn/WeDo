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
  object-fit: cover;
  border-radius: 50%;
  width: ${spaces.cozy * 10}px;
  height: ${spaces.cozy * 10}px;
`

const Name = styled.label`
  ${textStyles.h3}
`

const Count = styled.label`
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
    return (
      <Container>
        <Image src={this.props.image} />
        <Name>{this.props.name}</Name>
        <Count>{this.props.count}</Count>
        <Subtitle>{this.props.subtitle}</Subtitle>
        <StyledAnchor flavor="plain" to={this.props.to}>
          {this.props.linkText}
        </StyledAnchor>
      </Container>
    )
  }
}

export default Counter
