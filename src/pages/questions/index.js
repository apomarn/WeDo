import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import Media from 'react-media'
import styled from 'styled-components'
import Question from './components/question'
import Anchor from '../../components/anchor'
import { colors, textStyles, breakpoints, spaces } from '../../styles'
import { images, questions } from '../../utils'
import firebase from '../../firebase'

const Container = styled.div`
  background-color: ${colors.secondary};
  display: flex;
  position: relative;
  width: 100vw;
  height: 100vh;
`

const QuestionsContainer = styled.div`
  align-self: center;
  margin: 0 ${spaces.comfortable}px;
  width: 100vw;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    width: ${spaces.cozy * 66}px;
    flex-shrink: 0;
  }
`

const Video = styled.video`
  background-color: ${colors.black};
  width: calc(100vw - ${spaces.cozy * 66}px);
`

const StyledAnchor = styled(Anchor)`
  bottom: ${spaces.comfortable}px;
  color: ${colors.black};
  left: 50%;
  position: absolute;
  text-transform: unset;
  transform: translateX(-50%);

  ${textStyles.h5}

  @media screen and (min-width: ${breakpoints.desktop}px) {
    left: ${(spaces.cozy * 66) / 2}px;
  }
`

class Questions extends Component {
  constructor(props) {
    super(props)

    this.state = {
      index: 0,
      answers: []
    }

    this.onSelect = this.onSelect.bind(this)
    this.renderContent = this.renderContent.bind(this)
    this.renderVideo = this.renderVideo.bind(this)

    this.document = 'answers/' + this.props.user.uid

    this.answersRef = firebase.database().ref(this.document)
  }

  onSelect(option) {
    const { index, answers } = this.state

    answers.push(option)

    this.setState({
      index: index + 1,
      answers
    })
  }

  renderContent() {
    const question = questions[this.state.index]

    if (question) {
      return (
        <>
          <Question key={question.statement} {...question} onSelect={this.onSelect} />
          <StyledAnchor to="/">Back to home</StyledAnchor>
        </>
      )
    }

    this.answersRef.set(this.state.answers)

    return <Redirect to="/dashboard" />
  }

  renderVideo(matches) {
    if (!matches) {
      return null
    }

    return (
      <Video controls={false} autoPlay={true} muted loop>
        <source src={images.questionsVideo} type="video/webm" />
      </Video>
    )
  }

  render() {
    return (
      <Container>
        <QuestionsContainer>{this.renderContent()}</QuestionsContainer>
        <Media query={`(min-width: ${breakpoints.desktop}px)`}>{this.renderVideo}</Media>
      </Container>
    )
  }
}

export default Questions
