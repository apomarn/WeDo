import React, { Component } from 'react'
import Anchor from './anchor'
import { spaces, breakpoints, colors, textStyles } from '../styles'
import { images } from '../utils'
import styled from 'styled-components'
import Media from 'react-media'

const Container = styled.div`
  align-items: center;
  background-color: ${colors.white};
  display: flex;
  height: ${spaces.cozy * 8}px;
  justify-content: space-between;
  margin: 0 ${spaces.comfortable}px;
  max-width: ${spaces.cozy * 150}px;

  @media screen and (min-width: ${breakpoints.desktop}px) {
    height: ${spaces.cozy * 12}px;
    margin: 0 auto;
    padding: 0 ${spaces.comfortable}px;
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
          <img alt="menu" src={images.menuIcon} width={24} height={24} />
          <a href="/" style={{ margin: '0 auto' }}>
            <img alt="logo" src={images.logo} width={127} height={50} />
          </a>
        </>
      )
    }

    return (
      <>
        <a href="/">
          <img alt="logo" src={images.logo} width={127} height={50} />
        </a>
        <Menu>
          <li>
            <StyledAnchor flavor="plain" to="/calendar">
              Calendar
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor flavor="plain" to="/stories">
              Stories
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor flavor="plain" to="/questions">
              Questionary
            </StyledAnchor>
          </li>
          <li>
            <StyledAnchor flavor="plain" to="/guest-list">
              Guest List
            </StyledAnchor>
          </li>
        </Menu>
      </>
    )
  }

  render() {
    return (
      <Container>
        <Media query={`(max-width: ${breakpoints.desktop}px)`}>{this.renderContent}</Media>
      </Container>
    )
  }
}

export default Navbar
