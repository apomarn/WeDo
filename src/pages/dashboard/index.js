import React, { Component } from 'react'
import { spaces, textStyles, breakpoints } from '../../styles'
import { images } from '../../utils'
import NavBar from '../../components/navbar'
import Counter from './components/counter'
import styled from 'styled-components'

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

const CoupleNames = styled.label`
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
    count: 10,
    subtitle: 'Added',
    to: '/guest-list',
    linkText: 'See Your Guest List >'
  },
  {
    image: images.calendar,
    name: 'Check List',
    count: 10,
    subtitle: 'Tasks',
    to: '/check-list',
    linkText: 'Get Things Done >'
  },
  {
    image: images.story,
    name: 'Your Story',
    count: 0,
    subtitle: 'Views',
    to: '/story',
    linkText: 'Work In Your Story >'
  }
]

class Dashboard extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Container>
          <CoupleNames>Doris & Alberto</CoupleNames>
          <CountersContainer>
            {counters.map(counter => {
              return <Counter key={counter.image} {...counter} />
            })}
          </CountersContainer>
        </Container>
      </>
    )
  }
}

export default Dashboard
