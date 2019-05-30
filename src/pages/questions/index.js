import React, { Component } from 'react'
import Media from 'react-media'
import styled from 'styled-components'
import Question from './components/question'
import Anchor from '../../components/anchor'
import { colors, textStyles, breakpoints, spaces } from '../../styles'
import ThankYou from './components/thank-you'
import utils from '../../utils'

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

const questions = [
  {
    statement: '1. Are you emotionally as well as physically attracted to your partner?',
    options: ['Si', 'No']
  },
  {
    statement: '2. Are you emotionally as well as physically attracted to your partner?',
    options: ['Si', 'No']
  },
  {
    statement: '3. Are you emotionally as well as physically attracted to your partner?',
    options: ['Si', 'No']
  },
  {
    statement: '4. Are you emotionally as well as physically attracted to your partner?',
    options: ['Si', 'No']
  },
  {
    statement: '5. Are you emotionally as well as physically attracted to your partner?',
    options: ['Si', 'No']
  },
  {
    statement: 'Are you emotionally as well as physically attracted to your partner?',
    options: ['Si', 'No']
  }
]

class Questions extends Component {
  constructor() {
    super()

    this.state = {
      index: 0
    }

    this.onSelect = this.onSelect.bind(this)
    this.renderContent = this.renderContent.bind(this)
    this.renderVideo = this.renderVideo.bind(this)
  }

  onSelect() {
    this.setState({ index: this.state.index + 1 })
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

    return <ThankYou />
  }

  renderVideo(matches) {
    if (!matches) {
      return null
    }

    return (
      <Video controls={false} autoPlay={true} muted loop>
        <source src={utils.questionsVideo} type="video/webm" />
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
