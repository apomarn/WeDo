import React, { Component } from 'react'
import styled from 'styled-components'
import Option from './option'
import { spaces, textStyles, colors } from '../../../styles'

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

const OptionsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  > div {
    margin: ${spaces.cozy}px;
  }
`

const Label = styled.label`
  color: ${colors.brown};
  margin-bottom: ${spaces.cozy * 6}px;
  text-align: center;
  ${textStyles.h4Bold}
`

class Question extends Component {
  render() {
    return (
      <Container>
        <Label>{this.props.statement}</Label>
        <OptionsContainer>
          {this.props.options.map(option => (
            <Option key={option} text={option} onClick={() => this.props.onSelect(option)} />
          ))}
        </OptionsContainer>
      </Container>
    )
  }
}

export default Question
