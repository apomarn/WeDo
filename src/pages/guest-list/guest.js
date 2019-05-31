import React, { Component } from 'react'
import styled from 'styled-components'
import { colors, spaces, textStyles } from '../../styles'

const Container = styled.div`
  background-color: ${colors.secondary};
  display: flex;
  flex-direction: column;
  padding: ${spaces.comfortable}px;
  position: relative;

  :nth-child(odd) {
    background-color: ${colors.green};
  }

  :nth-child(even) {
    background-color: ${colors.secondary};
  }

  > :not(:last-child) {
    margin-bottom: ${spaces.cozy}px;
  }
`

const Name = styled.label`
  ${textStyles.h4}
`

const Address = styled.label`
  ${textStyles.h5}
`

const Phone = styled.label`
  ${textStyles.h5}
`

const TableNumber = styled.label`
  position: absolute;
  right: ${spaces.comfortable}px;
  top: 50%;
  transform: translateY(-50%);
  ${textStyles.h4Bold}
`

class Guest extends Component {
  render() {
    return (
      <Container>
        <Name>{this.props.name}</Name>
        <Address>{this.props.address}</Address>
        <Phone>{this.props.phone}</Phone>
        <TableNumber>{this.props.tableNumber}</TableNumber>
      </Container>
    )
  }
}

export default Guest
