import React, { Component } from 'react'
import styled from 'styled-components'
import { spaces, textStyles, breakpoints } from '../../styles'

const Base = styled.label`
  text-align: left;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    text-align: center;
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const Statement = styled(Base)`
  margin-bottom: ${spaces.cozy}px;
  ${textStyles.h4Bold}
`

const Answer = styled(Base)`
  ${textStyles.h5}
`

class QA extends Component {
  render() {
    return (
      <Container>
        <Statement>{this.props.statement}</Statement>
        <Answer>{this.props.answer}</Answer>
      </Container>
    )
  }
}

export default QA
