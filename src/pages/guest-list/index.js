import React, { Component } from 'react'
import styled from 'styled-components'
import NavBar from '../../components/navbar'
import { spaces } from '../../styles'
import Creator from './creator'
import Guest from './guest'

const Guests = styled.div`
  display: flex;
  flex-direction: column;
  margin: ${spaces.cozy * 6}px 0;
`

const Container = styled.div`
  margin: 0 auto;
  max-width: ${spaces.cozy * 80}px;
  padding: 0 ${spaces.comfortable}px;
`

class GuestList extends Component {
  constructor() {
    super()

    this.state = {
      guests: []
    }

    this.onCreate = this.onCreate.bind(this)
  }

  onCreate(data) {
    this.state.guests.push(data)

    this.setState(this.state.guests)
  }

  render() {
    console.log(this.state)

    const { guests } = this.state

    return (
      <>
        <NavBar />

        <Container>
          <Guests>
            {guests.map(guest => {
              return <Guest key={guest.name} {...guest} />
            })}
          </Guests>

          <Creator onCreate={this.onCreate} />
        </Container>
      </>
    )
  }
}

export default GuestList
