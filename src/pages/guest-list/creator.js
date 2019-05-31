import React, { Component } from 'react'
import styled from 'styled-components'
import { textStyles, spaces, colors } from '../../styles'
import Input from '../../components/input'
import Anchor from '../../components/anchor'

const Container = styled.div`
  display: flex;
  flex-direction: column;

  > :not(:last-child) {
    margin-bottom: ${spaces.relax}px;
  }
`

const Title = styled.label`
  text-align: center;
  ${textStyles.h4}
`

const StyledInput = styled(Input)`
  border: 1px solid ${colors.brown};
  border-radius: ${spaces.cozy}px;
`

class Creator extends Component {
  constructor() {
    super()

    this.initialState = {
      name: '',
      address: '',
      phone: '',
      tableNumber: ''
    }

    this.state = this.initialState

    this.onNameChange = this.onNameChange.bind(this)
    this.onAddressChange = this.onAddressChange.bind(this)
    this.onPhoneChange = this.onPhoneChange.bind(this)
    this.onTableNumberChange = this.onTableNumberChange.bind(this)
    this.onSave = this.onSave.bind(this)
  }

  onNameChange(e) {
    this.setState({ name: e.target.value })
  }

  onAddressChange(e) {
    this.setState({ address: e.target.value })
  }
  onPhoneChange(e) {
    this.setState({ phone: e.target.value })
  }

  onTableNumberChange(e) {
    this.setState({ tableNumber: e.target.value })
  }

  onSave(e) {
    this.props.onCreate(this.state)

    this.setState(this.initialState)
  }

  render() {
    return (
      <Container>
        <Title>Add A New Guest</Title>
        <StyledInput placeholder="Name" type="text" value={this.state.name} onChange={this.onNameChange} />
        <StyledInput placeholder="Address" type="text" value={this.state.address} onChange={this.onAddressChange} />
        <StyledInput placeholder="Phone" type="phone" value={this.state.phone} onChange={this.onPhoneChange} />
        <StyledInput
          placeholder="Table Number"
          type="number"
          value={this.state.tableNumber}
          onChange={this.onTableNumberChange}
        />
        <Anchor flavor="rounded" as="button" style={{ width: '100%' }} onClick={this.onSave}>
          SAVE
        </Anchor>
      </Container>
    )
  }
}

export default Creator
