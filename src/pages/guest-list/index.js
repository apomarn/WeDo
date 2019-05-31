import React, { Component } from 'react'
import { map } from 'lodash'
import styled from 'styled-components'
import NavBar from '../../components/navbar'
import { spaces } from '../../styles'
import Creator from './creator'
import Guest from './guest'
import firebase from '../../firebase'

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
  constructor(props) {
    super(props)

    this.state = {
      guests: {}
    }

    this.onCreate = this.onCreate.bind(this)
    this.onDelete = this.onDelete.bind(this)

    this.document = 'guests/' + this.props.user.uid

    this.guestsRef = firebase.database().ref(this.document)
  }

  componentDidMount() {
    this.guestsRef.on('value', snapshot => {
      this.setState({ guests: snapshot.val() })
    })
  }

  onCreate(data) {
    this.guestsRef.push(data)
  }

  onDelete(id) {
    this.guestsRef.child(id).remove()
  }

  render() {
    const { guests } = this.state

    return (
      <>
        <NavBar user={this.props.user} />
        <Container>
          <Guests>
            {map(guests, (guest, id) => {
              return <Guest key={id} {...guest} onDelete={() => this.onDelete(id)} />
            })}
          </Guests>
          <Creator onCreate={this.onCreate} />
        </Container>
      </>
    )
  }
}

export default GuestList
