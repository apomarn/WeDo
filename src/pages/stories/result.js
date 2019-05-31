import React, { Component } from 'react'
import styled from 'styled-components'
import Anchor from '../../components/anchor'
import { spaces, colors, textStyles } from '../../styles'

const Container = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: ${spaces.comfortable}px;

  :nth-child(even) {
    background-color: ${colors.secondary};
  }
`

const CoupleContainer = styled.div`
  display: flex;
  flex-direction: column;

  > :first-child {
    margin-bottom: ${spaces.cozy}px;
    ${textStyles.h5Bold}
  }

  > :last-child {
    ${textStyles.h6}
  }
`

class Stories extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Container>
        <CoupleContainer>
          <label>{this.props.coupleNames}</label>
          <label>{new Intl.DateTimeFormat().format(this.props.weddingDate)}</label>
        </CoupleContainer>
        <Anchor
          style={{ width: 'fit-content', padding: '0 32px' }}
          target="blank"
          as="a"
          flavor="rounded"
          onClick={() => this.props.onClick(this.props.coupleNames)}
          href={`https://www.zola.com${this.props.link}`}
        >
          Select Couple >
        </Anchor>
      </Container>
    )
  }
}

export default Stories
