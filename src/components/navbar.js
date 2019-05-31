import React, { Component } from 'react'
import Anchor from './anchor'
import { spaces, breakpoints, colors, textStyles } from '../styles'
import { images } from '../utils'
import styled from 'styled-components'
import Media from 'react-media'
import firebase from '../firebase'

const Container = styled.div`
  background-color: ${colors.white};
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.25);
  margin-bottom: 1px;
`

const InnerContainer = styled.div`
  align-items: center;
  display: flex;
  height: ${spaces.cozy * 8}px;
  justify-content: space-between;
  padding: 0 ${spaces.comfortable}px;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    height: ${spaces.cozy * 12}px;
    margin-left: auto;
    margin-right: auto;
    max-width: ${spaces.cozy * 150}px;
  }
`

const Menu = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  > li {
    list-style: none;
  }
`

const StyledAnchor = styled(Anchor)`
  text-transform: unset;
  color: ${colors.black};
  margin: 0 ${spaces.cozy}px;

  ${textStyles.h4}
`

class Navbar extends Component {
  cosntructor() {
    this.super()

    this.renderContent = this.renderContent.bind(this)
  }

  renderContent(matches) {
    if (matches) {
      return (
        <>
          <a href="/" style={{ margin: '0 auto' }}>
            <img alt="logo" src={images.logo} width={127} height={50} />
          </a>
          {this.props.user && (
            <Menu>
              <li>
                <StyledAnchor flavor="plain" to="/dashboard">
                  Dashboard
                </StyledAnchor>
              </li>
            </Menu>
          )}
        </>
      )
    }

    return (
      <>
        <a href="/">
          <img alt="logo" src={images.logo} width={127} height={50} />
        </a>
        <Menu>
          {!this.props.user ? (
            <>
              <li>
                <StyledAnchor flavor="plain" to="/guest-list">
                  Guest List
                </StyledAnchor>
              </li>
              <li>
                <StyledAnchor flavor="plain" to="/questions">
                  Questionary
                </StyledAnchor>
              </li>
              <li>
                <StyledAnchor flavor="plain" to="/stories">
                  Stories
                </StyledAnchor>
              </li>
            </>
          ) : (
            <>
              <li>
                <StyledAnchor flavor="plain" to="/dashboard">
                  Dashboard
                </StyledAnchor>
              </li>
              <li>
                <StyledAnchor
                  flavor="plain"
                  to="/"
                  onClick={e => {
                    e.preventDefault()
                    e.nativeEvent.preventDefault()
                    firebase.auth().signOut()
                  }}
                >
                  Logout
                </StyledAnchor>
              </li>
            </>
          )}
        </Menu>
      </>
    )
  }

  render() {
    return (
      <Container>
        <InnerContainer>
          <Media query={`(max-width: ${breakpoints.desktop}px)`}>{matches => this.renderContent(matches)}</Media>
        </InnerContainer>
      </Container>
    )
  }
}

export default Navbar
