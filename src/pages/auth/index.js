import React, { Component } from 'react'
import styled from 'styled-components'
import firebase from '../../firebase'
import { images } from '../../utils'
import { spaces, colors, textStyles } from '../../styles'
import NavBar from '../../components/navbar'
import Input from '../../components/input'
import Anchor from '../../components/anchor'

const Container = styled.div`
  align-items: center;
  background-color: ${colors.secondary};
  display: flex;
  height: 100vh;
  justify-content: center;
  padding: 0 ${spaces.comfortable}px;
  position: relative;
`

const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`

const Image = styled.img`
  margin-bottom: ${spaces.cozy * 6}px;
  width: 50%;
`

const Title = styled.p`
  margin-bottom: ${spaces.comfortable}px;
  ${textStyles.h4Bold}
`

const QuestionLabel = styled.p`
  margin-bottom: ${spaces.comfortable}px;
  ${textStyles.h5}
`

const LinkTo = styled(Anchor)`
  color: ${colors.brown};
  margin-bottom: ${spaces.comfortable}px;
  text-transform: unset;
  ${textStyles.h5Bold}
`

const Error = styled.p`
  color: red;
  margin-bottom: ${spaces.cozy}px;
  max-width: ${spaces.cozy * 41}px;
  text-align: center;
  ${textStyles.h5}
`

const OtherActionsContainer = styled.div`
  display: flex;
  margin-top: ${spaces.cozy * 4}px;

  > :first-child {
    margin-right: ${spaces.cozy}px;
  }
`

const Footer = props => {
  const { isSignIn } = props

  if (isSignIn) {
    return (
      <>
        <QuestionLabel>Not registered yet?</QuestionLabel>
        <LinkTo to="signup">Sign Up</LinkTo>
      </>
    )
  }

  return (
    <>
      <QuestionLabel>Already a user?</QuestionLabel>
      <LinkTo to="/signin">Sign In</LinkTo>
    </>
  )
}

class Auth extends Component {
  constructor(props) {
    super(props)

    this.state = {
      email: '',
      password: '',
      error: undefined,
      isSignIn: this.props.location.pathname === '/signin'
    }

    this.onEmailChange = this.onEmailChange.bind(this)
    this.onPasswordChange = this.onPasswordChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value })
  }

  onPasswordChange(e) {
    this.setState({ password: e.target.value })
  }

  onSubmit(e) {
    const { email, password, isSignIn } = this.state

    const catchError = error => {
      this.setState({ error: error.message })
    }

    const redirectTo = res => {
      const { from } = this.props.location.state || { from: { pathname: '/' } }

      window.location.href = from.pathname
    }

    if (isSignIn) {
      firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(redirectTo)
        .catch(catchError)
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then(redirectTo)
        .catch(catchError)
    }
  }

  render() {
    const { error, isSignIn } = this.state

    const title = isSignIn ? 'Sign In' : 'Sign Up'

    return (
      <>
        <NavBar user={this.props.user} />
        <Container>
          <InnerContainer>
            <Image src={images.authArt} />
            <Title>{title}</Title>
            <Input
              value={this.state.email}
              placeholder="Email"
              onChange={this.onEmailChange}
              style={{ marginBottom: spaces.comfortable }}
            />
            <Input
              value={this.state.password}
              type="password"
              placeholder="Password"
              onChange={this.onPasswordChange}
              style={{ marginBottom: spaces.cozy * 6 }}
            />
            {error && <Error>{error}</Error>}
            <Anchor as="button" flavor="rounded" onClick={this.onSubmit}>
              Enter
            </Anchor>

            <OtherActionsContainer>
              <Footer isSignIn={isSignIn} />
            </OtherActionsContainer>
          </InnerContainer>
        </Container>
      </>
    )
  }
}

export default Auth
