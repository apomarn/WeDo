import React, { Component } from 'react'
import styled from 'styled-components'
import Navbar from '../../components/navbar'
import Anchor from '../../components/anchor'
import QA from './qa'
import { spaces, textStyles, breakpoints } from '../../styles'
import { questions } from '../../utils'
import firebase from '../../firebase'

const QAs = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${spaces.cozy * 6}px;

  > * {
    margin-bottom: ${spaces.relax}px;
  }
`

const Container = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: ${spaces.cozy * 80}px;
  padding: 0 ${spaces.comfortable}px;
`

class QuestionsReview extends Component {
  constructor(props) {
    super(props)

    this.state = {
      answers: []
    }
  }

  componentDidMount() {
    const id = this.props.user.uid
    const answersRef = firebase.database().ref('answers/' + id)

    answersRef.once('value').then(data => {
      this.setState({ answers: data.val() })
    })
  }

  render() {
    return (
      <>
        <Navbar user={this.props.user} />
        <Container>
          <QAs>
            {questions.map((question, index) => {
              const statement = question.statement
              const answer = this.state.answers[index]

              return <QA key={statement} statement={statement} answer={answer} />
            })}
            <QA />
          </QAs>
          <Anchor flavor="rounded" to="/questions">
            Retake Questions
          </Anchor>
        </Container>
      </>
    )
  }
}

export default QuestionsReview
