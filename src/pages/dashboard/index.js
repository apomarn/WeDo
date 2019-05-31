import React, { Component } from 'react'
import { size } from 'lodash'
import { spaces, textStyles, breakpoints } from '../../styles'
import { images } from '../../utils'
import NavBar from '../../components/navbar'
import Counter from './components/counter'
import styled from 'styled-components'
import firebase from '../../firebase'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0 auto;
  margin-top: ${spaces.cozy * 6}px;
  max-width: ${spaces.cozy * 150}px;
`

const CountersContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`

const Welcome = styled.label`
  margin-bottom: ${spaces.comfortable}px;
  margin-left: ${spaces.comfortable}px;
  text-align: left;
  ${textStyles.h4Bold}

  @media screen and (min-width: ${breakpoints.desktop}px) {
    margin-left: 0;
    text-align: center;
    ${textStyles.h2Bold}
  }
`

const counters = [
  {
    image: images.guestList,
    name: 'Guest List',
    count: 0,
    subtitle: 'Added',
    to: '/guest-list',
    fallbackTo: '/guest-list',
    fallbackText: 'Add Your First Guest >',
    linkText: 'See Your Guest List >'
  },
  {
    image: images.questionary,
    name: 'Questionary',
    count: 0,
    subtitle: 'Answers',
    to: '/questions-review',
    fallbackTo: '/questions',
    fallbackText: 'Take Questions >',
    linkText: 'Review your answers >'
  },
  {
    image: images.story,
    name: 'Stories',
    count: 0,
    subtitle: 'Views',
    to: '/stories',
    fallbackTo: '/stories',
    fallbackText: 'Check Stories >',
    linkText: 'Check Stories >'
  }
]

class Dashboard extends Component {
  constructor() {
    super()

    this.state = {
      numOfGuests: 0,
      numOfAnswers: 0,
      numOfViews: 0
    }
  }

  componentDidMount() {
    const id = this.props.user.uid
    const guestsRef = firebase.database().ref('guests/' + id)
    const answersRef = firebase.database().ref('answers/' + id)
    const viewsRef = firebase.database().ref('views/' + id)

    const promises = [guestsRef.once('value'), answersRef.once('value'), viewsRef.once('value')]

    Promise.all(promises).then(result => {
      const [guests, answers, views] = result

      const numOfGuests = size(guests.val())
      const numOfAnswers = size(answers.val())
      const numOfViews = size(views.val())

      this.setState({ numOfGuests, numOfAnswers, numOfViews })
    })
  }

  render() {
    return (
      <>
        <NavBar user={this.props.user} />
        <Container>
          <Welcome>Welcome</Welcome>
          <CountersContainer>
            {counters.map((counter, index) => {
              if (index === 0) {
                counter.count = this.state.numOfGuests
              }

              if (index === 1) {
                counter.count = this.state.numOfAnswers
              }

              if (index === 2) {
                counter.count = this.state.numOfViews
              }

              return <Counter key={counter.image} {...counter} />
            })}
          </CountersContainer>
        </Container>
      </>
    )
  }
}

export default Dashboard
